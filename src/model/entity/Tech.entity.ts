import { IBaseModel } from '../shared/base-model';

export class TechEntity implements IBaseModel {
    id: string | number | undefined;
    title?: string;
    icon?: string;
    description?: string; 

    constructor(this_class?: TechEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}