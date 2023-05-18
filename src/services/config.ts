/* eslint-disable camelcase */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    handlerEnabled: boolean;
  }
}

export interface IConfigProps {
  api_url: string;
  has_user_header: boolean;
}

export class Config {
  axios: AxiosInstance;

  constructor({ api_url, has_user_header = false }: IConfigProps) {
    if (!api_url) throw new Error("Missing api_url");
    this.axios = this.create(api_url, has_user_header);
  }

  create(apiUrl: string, has_user_header: boolean) {
    return axios.create({
        baseURL: apiUrl,
        headers: {
          "Content-Type": "application/json",
        },
      } as unknown as AxiosRequestConfig);
  }

  instance() {
    return this.axios;
  }
}

const config = (config: IConfigProps) => new Config(config);

export default config;
