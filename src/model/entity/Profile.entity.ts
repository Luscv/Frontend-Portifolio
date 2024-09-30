import { IBaseModel } from '../shared/base-model';
import { PersonalInfoEntity } from './PersonalInfo.entity';

export class ProfileEntity implements IBaseModel{
    id: string | number | undefined;
    name?: string;
    github?: string;
    linkedin?: string;
    role?: string;
    avatarUrl?: string;
    extraInfo?: PersonalInfoEntity[];

    constructor(this_class?: ProfileEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}
