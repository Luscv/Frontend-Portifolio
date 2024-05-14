import { IBaseModel } from '../shared/base-model';

export class PersonalInfoEntity implements IBaseModel{
    id: number| string | undefined;
    title?: string;
    data?: string;
    icon?: string;

    constructor(this_class?: PersonalInfoEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}