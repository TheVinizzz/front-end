import { FC } from "react";
import { UseAuthProvider } from "../hook/useAuth";

const AppProvider: FC<any> = ({ children }) => {
    return (
      <UseAuthProvider>
        { children }
      </UseAuthProvider>
    );
  };
  
  export default AppProvider;
  