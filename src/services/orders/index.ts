import {AxiosInstance} from "axios";

class Orders {
    instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    orders() {
        return this.instance.get(`/orders/store`);
    }

    orderDelete(id: string) {
        return this.instance.delete(`/orders/${id}`);
    }
}

const orders = (instance: AxiosInstance) => new Orders(instance)

export default orders;
