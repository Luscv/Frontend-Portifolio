import { IBaseModel } from '../shared/base-model';
import { TechEntity } from './Tech.entity';

export class CertificateEntity implements IBaseModel{
    id: number| string | undefined;
    title?: string;
    category?: string;
    img?: string;
    issuedAt?: string;
    url?: string;
    techs?: TechEntity[];

    constructor(this_class?: CertificateEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}
