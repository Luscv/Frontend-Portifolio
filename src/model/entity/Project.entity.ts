import { IBaseModel } from '../shared/base-model';

export class ProjectEntity implements IBaseModel{
    id: number| string | undefined;
    name?: string;
    language?: string;
    description?: string; 

    constructor(this_class?: ProjectEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}