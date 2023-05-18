import {AxiosInstance} from "axios";

class Auth {
    instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    login(data: any) {
        return this.instance.post(`/login`, data);
    }

    validToken() {
        return this.instance.post(`/ifood/token`);
    }
}

const auth = (instance: AxiosInstance) => new Auth(instance)

export default auth;
