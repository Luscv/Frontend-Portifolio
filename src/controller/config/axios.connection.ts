import axios, { AxiosInstance } from 'axios';
import API_URL from '../utils/api-url';

class AxiosConnection {
  get AXIOS_INSTANCE(): AxiosInstance {
    const baseURL: string = API_URL.API_BASE_GITHUB
    return axios.create({
      baseURL,
    })
  }
}


export default new AxiosConnection().AXIOS_INSTANCE
