import { IBaseModel } from '../shared/base-model';

export class ProfileEntity implements IBaseModel{
    id: string | number | undefined;
    name?: string;
    github_url?: string;
    location?: string;
    bio?: string;
    avatar_url?: string;
    email?: string;

    constructor(this_class?: ProfileEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}