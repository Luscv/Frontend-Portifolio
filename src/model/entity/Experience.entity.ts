import { IBaseModel } from '../shared/base-model';

export class ExperienceEntity implements IBaseModel{
    id: number| string | undefined;
    title?: string;
    date?: string;
    body?: string; 

    constructor(this_class?: ExperienceEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}