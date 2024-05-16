import axiosConnection from '../config/axios.connection';
import GITHUB_API_URL from '../utils/api-url';
import { make_url } from '../utils/make-url';

class ProfileService {


  async getProfile(): Promise<any>{
    return axiosConnection.get(
      make_url(GITHUB_API_URL.API_GITHUB_USER)
    ).then((r) => r.data)
  }

  async getRepos(): Promise<any>{
    return axiosConnection.get(
      make_url(GITHUB_API_URL.API_GITHUB_USER, GITHUB_API_URL.API_GITHUB_REPOS)
    ).then((r) => r.data)
  }
  async getRepoOnly(full_name: string): Promise<any>{
    return axiosConnection.get(
      make_url(GITHUB_API_URL.API_GITHUB_REPOS, full_name)
    ).then((r) => r.data)
  }

  async getRepoContent(full_name: string, key: string): Promise<any>{
    return axiosConnection.get(
      make_url(GITHUB_API_URL.API_GITHUB_REPOS, full_name, GITHUB_API_URL.API_GITHUB_REPO_IMG, '.github'),
      {params: {key}}
    ).then((r) => r.data)
  }
}

export default new ProfileService();
