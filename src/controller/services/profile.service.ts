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

  async getProjects(lang: string): Promise<any>{
    return axiosConnection.get(
      make_url(PORTIFOLIO_API.BASE_SERVICE, PORTIFOLIO_API.API_PROJECTS), { params: {lang}}
    ).then((r) => r.data.projects)
  }

  async getCertificates(lang: string): Promise<any>{
    return axiosConnection.get(
      make_url(PORTIFOLIO_API.BASE_SERVICE, PORTIFOLIO_API.API_CERTIFICATES), { params: {lang}}
    ).then((r) => r.data.certificates)
  }

  async getCarrer(lang: string): Promise<any>{
    return axiosConnection.get(
      make_url(PORTIFOLIO_API.BASE_SERVICE, PORTIFOLIO_API.API_CARRER), { params: {lang}}
    ).then((r) => r.data.carrer)
  }
}

export default new ProfileService();
