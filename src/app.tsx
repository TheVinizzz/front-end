import { FC, useEffect, useState } from "react"
import { useAuth } from "./hook/useAuth";

const App: FC<any> = ({ children }) => {

    const {socket} = useAuth()
    
    const [, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }


        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default App