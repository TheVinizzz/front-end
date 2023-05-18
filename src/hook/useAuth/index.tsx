import { createContext, useState, useContext, useCallback, FC, useEffect } from 'react';
import api from '../../services';
import { IAuthContext, ILogin, IUser } from './interfaces';
import { io } from 'socket.io-client';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const UseAuthProvider: FC<any> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<IUser | null>({} as IUser)
  const [loading, setLoading] = useState<boolean>(false)

  const URL = 'http://localhost:5001';
  const getToken = localStorage.getItem("@youpop-token")

  const socket = io(URL, {
    auth: {
      token: getToken
    }
  }
  );

  const handleLogin = useCallback(async (values: ILogin) => {
    try {
      const response = await api.auth().login(values)
      api.instance.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      setIsAuthenticated(true)
      setUser(response.data.user)
      localStorage.setItem('@youpop-user', JSON.stringify(response.data.user));
      localStorage.setItem('@youpop-token', response.data.token || '');
    }
    catch (err) {
      setIsAuthenticated(false)
      setUser({} as IUser)
      api.instance.defaults.headers.Authorization = `Bearer`;
      localStorage.clear()
      throw new Error('Login failure')
    }
  }, [])

  const handleLogout = useCallback(async () => {
    api.instance.defaults.headers.Authorization = `Bearer`;
    setIsAuthenticated(false)
    setUser({} as IUser)
    localStorage.clear()
  }, [])


  useEffect(() => {
    const validAutheticate = async () => {
      try {
        setLoading(true)
        setIsAuthenticated(true)
        const token = localStorage.getItem("@youpop-token")
        const user = localStorage.getItem("@youpop-user")
        api.instance.defaults.headers.Authorization = `Bearer ${token}`;
        await api.auth().validToken()
        setUser(JSON.parse(String(user)))
      }
      catch {
        handleLogout()
      }
      finally {
        setLoading(false)
      }
    }
    validAutheticate()
  }, [])


  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        isAuthenticated,
        user,
        handleLogout,
        loading,
        socket
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { UseAuthProvider, useAuth };
