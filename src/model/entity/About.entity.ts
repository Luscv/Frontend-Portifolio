import { IBaseModel } from '../shared/base-model';
import { TechEntity } from './Tech.entity';

export class AboutEntity implements IBaseModel{
    id: number| string | undefined;
    bio?: string;
    goals?: string;
    techs?: TechEntity[];

    constructor(this_class?: AboutEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}
