import { ProjectEntity } from '@/model/entity/Project.entity';
import Data from '../data/index';
import profileService from 'src/controller/services/profile.service';

class ProjectData extends Data {
    constructor(){
        super()
    }

    async getMyRepositories(): Promise<Array<ProjectEntity>>{
        return await profileService.getRepos()
    }

}

export default new ProjectData();