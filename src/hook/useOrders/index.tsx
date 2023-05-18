import { useCallback, useEffect, useState } from "react"
import api from "../../services"
import { IOrder } from "./interfaces"
import { useAuth } from "../useAuth"

const useOrders = () => {
    const [orders, setOrders] = useState<IOrder[]>([])

    const {socket} = useAuth()

    const handleOrders = useCallback(async () => {
        const response = await api.orders().orders()
        setOrders(response.data)
    },[])

    useEffect(() => {
        function onFooEvent(value: any) {
          console.log("Danado", value)
        }
      
        socket.on('Order', onFooEvent);
      
        return () => {
        
        };
      }, []);

    useEffect(() => {
        Promise.all([
            handleOrders() 
        ])
    }, [])

    return {
        orders
    }
}

export default useOrders