import { AxiosInstance } from "axios";
import auth from "./auth";
import config, { IConfigProps } from "./config";
import orders from "./orders";

export class Api {
  instance: AxiosInstance;
  constructor(params: IConfigProps) {
    this.instance = config(params).instance();
  }

  auth() {
    return auth(this.instance);
  }

  orders() {
    return orders(this.instance);
  }
}
const _Api = (params: IConfigProps) => new Api(params);
export default _Api;
