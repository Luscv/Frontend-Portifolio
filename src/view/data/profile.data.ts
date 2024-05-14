import { ProfileEntity } from 'src/model/entity/Profile.entity';
import Data from '../data/index';
import profileService from 'src/controller/services/profile.service';

class ProfileData extends Data{
    constructor(){
        super();
    }

    async getGithubProfile(): Promise<ProfileEntity>{
        return await profileService.getProfile()
    }

    async getMyRepositories(){
        return await profileService.getRepos()
    }
    async getMyRepo(){
        return await profileService.getRepoOnly()
    }
}

export default new ProfileData();