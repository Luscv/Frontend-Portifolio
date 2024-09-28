import { ProfileEntity } from 'src/model/entity/Profile.entity';
import { ProjectEntity } from '@/model/entity/Project.entity';
import Data from '../data/index';
import profileService from 'src/controller/services/profile.service';

class ProfileData extends Data{
    constructor(){
        super();
    }

    async getProfile(lang: string){
      return await profileService.getProfile(lang)
    }

    async getAbout(lang: string){
      return await profileService.getAbout(lang)
    }

    // async getMyRepositories(){
    //     return await profileService.getRepos()
    // }
    // async getMyRepo(){
    //     return await profileService.getRepoOnly()
    // }

}

export default new ProfileData();
