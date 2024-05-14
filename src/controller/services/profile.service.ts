import axiosConnection from '../config/axios.connection';
import GITHUB_API_URL from '../utils/api-url';
import { make_url } from '../utils/make-url';

class ProfileService {


  async getProfile(): Promise<any>{
    return axiosConnection.get(
      make_url(GITHUB_API_URL.API_GITHUB_USER)
    ).then((r) => r.data)
  }
}

export default new ProfileService();
