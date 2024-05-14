import { PersonalInfoEntity } from '@/model/entity/PersonalInfo.entity';
import { SocialsEntity } from '@/model/entity/Socials.entity';

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
    ];
    socials: Array<SocialsEntity> = [
        {
            id: 1,
            title: 'Github',
            url: 'https://github.com/Luscv',
        },
        {
            id: 2,
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/luscv/',
        }
    ]
    
}

export default new PersonalInfo();
