import Button from "../../components/Button"
import Table from "../../components/Table"
import useOrders from "../../hook/useOrders"
import FormOrders from "./components/FormOrders"
import moment from 'moment'
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useState } from "react"
import Modal from "../../components/Modal"
import { IOrder } from "../../hook/useOrders/interfaces"


const Dashboard = () => {
    const [isCreate, setIsCreate] = useState<boolean>(false)
    const [isDelete, setIsDelete] = useState<IOrder | null>(null)
    
    const { orders } = useOrders()
    console.log('orders', orders)

    const handleActions = (all: any) => {
        console.log("all", all)
        return (
            <div>
                <Button 
                    className="bg-[#EAB305] hover:bg-[#977917] px-2 text-lg mr-2"
                >
                    <FiEdit2 />
                </Button>
                <Button 
                    className="bg-[#f80606] hover:bg-[#971b1b] px-2 text-lg"
                    onClick={() => setIsDelete(all)}
                >
                    <MdOutlineDeleteOutline />
                </Button>
            </div>
        )
    }

    const columns = [
        {
            name: 'Pedido',
            data: 'id'
        },
        {
            name: 'Endereço',
            data: 'address'
        },
        {
            name: 'Valor',
            data: 'total',
            render: (value: string) => <span>R$ {value}</span>
        },
        {
            name: 'Criado',
            data: 'created_at',
            render: (data: string) => <span className="">{moment(data).format('DD/MM/YYYY')} - {moment(data).format('LTS')}</span>
        },
        {
            name: '',
            data: 'all',
            render: (data: any) => handleActions(data)
        }
    ]
    
    const handleEdit = () => {
        setIsCreate(old => !old)
    }
    return (
        <div className="container mx-auto px-4">
            <div className="w-full flex justify-end">
                <Button 
                    className="bg-[#EAB305] hover:bg-[#977917] px-3 text-lg flex items-center"
                    onClick={handleEdit}
                >
                    Adicionar pedido
                    <BiMessageSquareAdd className="ml-2 text-2xl"/>
                </Button>
            </div>
            {isCreate && <FormOrders />}
            <Table title="Pedido Realizado" columns={columns} data={orders}/>
            <Table title="Em Preparo" columns={columns} data={orders}/>
            <Table title="Pedido saiu para entrega"columns={columns} data={orders}/>
            <Modal data={isDelete} setData={() => setIsDelete(null)} actionClose="Cancelar" actionSend="Apagar">
                <div className="p-10">
                    Você tem certeza que quer apagar o pedido <b>{isDelete?.id}</b> no valor de <b>R$ {isDelete?.total}</b>?
                </div>
            </Modal>
        </div>
    )
}

export default Dashboard