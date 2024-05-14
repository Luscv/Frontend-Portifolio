import { PersonalInfoEntity } from '@/model/entity/PersonalInfo.entity';

class PersonalInfo {
    infoList: Array<PersonalInfoEntity> = [
        {
            id: 1,
            title: 'EMAIL',
            data: 'lucbarrospc@gmail.com',
            icon: 'mail_outline',
        },
        {
            id: 2,
            title: 'PHONE',
            data: '+55 (31) 9 7173-7079',
            icon: 'o_phone',
        },
        {
            id: 3,
            title: 'BIRTHDAY',
            data: '12/06/1999',
            icon: 'o_event',
        },
        {
            id: 4,
            title: 'LOCATION',
            data: 'Brazil, MG',
            icon: 'o_place',
        },
    ]
    
}

export default new PersonalInfo();
