import axiosConnection from '../config/axios.connection';
import PORTIFOLIO_API from '../utils/api-url';
import { make_url } from '../utils/make-url';

class ProfileService {


  async getProfile(lang: string): Promise<any>{
    return axiosConnection.get(
      make_url(PORTIFOLIO_API.BASE_SERVICE, PORTIFOLIO_API.API_PROFILE), { params: {lang}}
    ).then((r) => r.data.profile)
  }

  async getAbout(lang: string): Promise<any>{
    return axiosConnection.get(
      make_url(PORTIFOLIO_API.BASE_SERVICE, PORTIFOLIO_API.API_ABOUT), { params: {lang}}
    ).then((r) => r.data.about)
  }

//   async getRepos(): Promise<any>{
//     return axiosConnection.get(
//       make_url(PORTIFOLIO_API.API_GITHUB_USER, PORTIFOLIO_API.API_GITHUB_REPOS)
//     ).then((r) => r.data)
//   }
//   async getRepoOnly(full_name: string): Promise<any>{
//     return axiosConnection.get(
//       make_url(PORTIFOLIO_API.API_GITHUB_REPOS, full_name)
//     ).then((r) => r.data)
//   }

//   async getRepoContent(full_name: string, key: string): Promise<any>{
//     return axiosConnection.get(
//       make_url(PORTIFOLIO_API.API_GITHUB_REPOS, full_name, PORTIFOLIO_API.API_GITHUB_REPO_IMG, '.github'),
//       {params: {key}}
//     ).then((r) => r.data)
//   }
}

export default new ProfileService();
