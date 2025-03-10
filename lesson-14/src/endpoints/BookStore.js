import { RestClient } from "../restClient";

export default class BookStore extends RestClient {
  constructor(baseUrl, headers, configOverrides){
    super(baseUrl, configOverrides);
    this.headers = headers || {};
    this.url = '/BookStore/v1'
  }

  async getAllBooks(headers = this.headers){
    return this.sendGet({url: `${this.url}/Books`, headers});
  }
  //....
}