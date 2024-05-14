import { IBaseModel } from '../shared/base-model';

export class SocialsEntity implements IBaseModel{
    id: string | number | undefined;
    title?: string;
    url?: string;

    constructor(this_class?: SocialsEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}