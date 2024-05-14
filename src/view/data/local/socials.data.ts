import { SocialsEntity } from '@/model/entity/Socials.entity';

class SocialsData {
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

export default new SocialsData();
