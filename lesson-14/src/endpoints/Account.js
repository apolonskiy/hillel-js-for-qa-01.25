import { RestClient } from "../restClient";

export default class Account extends RestClient {
  constructor(baseUrl, configOverrides){
    super(baseUrl, configOverrides);
    this.headers = {};
    this.url = '/Account/v1'
  }

  /** 
     * Verify if use is authorized
     * @param payload = {
     *     userName: string,
     *     password: string
     *  }
    */
  async isAuthorised(payload, headers = this.headers){
    return this.sendPost({url: `${this.url}/Authorized`, data: payload, headers});
  }

  async generateToken(payload) {
    const resp = await this.sendPost({url: `${this.url}/GenerateToken`, data: payload});
    this.headers.Authorization = `Bearer ${resp.data.token}`
    return resp;
  }


  async createUser(payload, headers = this.headers) {
    return this.sendPost({url: `${this.url}/User`, data: payload, headers});
  }

  async deleteUser(userId, headers = this.headers) {
    return await this.sendDelete({url: `${this.url}/User/${userId}`, headers});
  }

  async getUser(userId, headers = this.headers) {
    return await this.sendGet({url: `${this.url}/User/${userId}`, headers});
  }

}