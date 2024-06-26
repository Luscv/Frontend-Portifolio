import { ProjectEntity } from '@/model/entity/Project.entity';
import Data from '../data/index';
import profileService from 'src/controller/services/profile.service';
import { RepoContentEntity } from '@/model/entity/RepoContent.entity'

class ProjectData extends Data {
    constructor(){
        super()
    }

    async getMyRepositories(): Promise<Array<ProjectEntity>>{
        return await profileService.getRepos()
    }

    async getFrontendRepositories(){
        const frontLanguages = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vue']
        return await profileService.getRepos().then((res) => {
                const frontRepos = res.filter((el: { language: string; }) => {
                    const el_language = el.language
                    return frontLanguages.includes(el_language)
                })
                return frontRepos;
        })  
    }

    async getMobileRepositories(){
        const mobileLanguages = ['React Native']
        return await profileService.getRepos().then((res) => {
                const mobileRepos = res.filter((el: { language: string; }) => {
                    const el_language = el.language
                    return mobileLanguages.includes(el_language)
                })
                return mobileRepos;
        })  
    }

    async getUniversityRepositories(){
        const universityLanguages = ['C']
        return await profileService.getRepos().then((res) => {
                const universityRepos = res.filter((el: { language: string; }) => {
                    const el_language = el.language
                    return universityLanguages.includes(el_language)
                })
                return universityRepos;
        })  
    }

    async getOtherRepositories(){
        const otherLanguages = ['C', 'React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vue', ]
        return await profileService.getRepos().then((res) => {
                const otherRepos = res.filter((el: { language: string; }) => {
                    const el_language = el.language
                    return otherLanguages.includes(el_language)
                })
                return otherRepos;
        })  
    }

    async getRepo(full_name: string): Promise<ProjectEntity>{
        return await profileService.getRepoOnly(full_name)
    }

    async getRepoContent(full_name: string, key: string): Promise<RepoContentEntity>{
        return await profileService.getRepoContent(full_name, key)
    }
}

export default new ProjectData();