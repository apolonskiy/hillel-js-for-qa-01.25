import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

const config = JSON.parse(fs.readFileSync(path.join(__dirname, `../config/config.${process.env.TEST_ENV || 'dev'}.json`)))

export default class RestClient {
  #axiosInstance;
  constructor(baseUrl = config.baseUrl, configOverrides = {...config}){ 
    this.baseUrl = baseUrl
    delete configOverrides.baseUrl;
    this.#axiosInstance = axios.create({baseURL: this.baseUrl, validateStatus: () => true, ...configOverrides});
  }

  async sendPost({url, data, headers, params}) {
    return this.#sendRequest({url, method: 'POST', data, headers, params});
  }

  async sendGet({url, headers, params}) {
    return this.#sendRequest({url, method: 'GET', headers, params});
  }

  async sendPut({url, data, headers, params}) {
    return this.#sendRequest({url, method: 'PUT', data, headers, params});
  }

  async sendDelete({url, data, headers, params}) {
    return this.#sendRequest({url, method: 'DELETE', data, headers, params});
  }

  async #sendRequest({url, method, data, headers, params}) {
    return this.#axiosInstance.request({url, method, data, headers, params});
  }
}