import { IBaseModel } from '../shared/base-model';
import { RepoContentEntity } from './RepoContent.entity';
import { TechEntity } from './Tech.entity';

export class ProjectEntity implements IBaseModel{
    id: number| string | undefined;
    description?: string;
    repoUrl?: string;
    img?: string;
    techs?: TechEntity[];
    type?: string;
    url?: string;

    constructor(this_class?: ProjectEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}
