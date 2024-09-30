import { IBaseModel } from '../shared/base-model';
import { TechEntity } from './Tech.entity';

export class CarrerEntity implements IBaseModel{
    id: number| string | undefined;
    title?: string;
    carrerSection?: string;
    description?: string;
    icon?: string;
    institution?: string;
    period?: string;

    constructor(this_class?: CarrerEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}
