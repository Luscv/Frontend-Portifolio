import { IBaseModel } from '../shared/base-model';
import { RepoContentEntity } from './RepoContent.entity';

export class ProjectEntity implements IBaseModel{
    id: number| string | undefined;
    name?: string;
    language?: string;
    description?: string; 
    full_name?: string;
    default_branch?: string;
    html_url?: string;
    content?: Array<RepoContentEntity>;

    constructor(this_class?: ProjectEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}