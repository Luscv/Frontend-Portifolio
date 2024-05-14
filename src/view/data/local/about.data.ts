import { TechEntity } from '@/model/entity/Tech.entity';

class About {
    bio = `Sempre em busca de novas experiências e desafios que possam contribuir para meu desenvolvimento profissional.
    Experiência com as tecnologias: Javascript, Typescript, VueJs (2 e 3), Pinia, Vuex, Quasar e Vuetify
    Sou extremamente dedicado e gosto de encarar novos desafios a fim de me tornar um profissional cada vez mais experiente, aprendendo cada dia mais e sempre colocando meus conhecimentos em prática.
    Estudante de Análise e desenvolvimento de sistemas, com ingles fluente`;
    tech: Array<TechEntity> = [
        {
            id: 1,
            title: 'Vue',
            description: 'Framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
            icon: 'o_code'
        },
        {
            id: 2,
            title: 'React Native',
            description: 'Framework para desenvolver aplicativos, permitindo uso da estrutura React juntamente com os recursos nativos de cada plataforma.',
            icon: 'o_code'
        },
        {
            id: 3,
            title: 'Pinia',
            description: 'Biblioteca de armazenamento e estrutura de gerenciamento de estado para Vue.js.',
            icon: 'o_build'
        },
        {
            id: 4,
            title: 'Quasar',
            description: 'Framework de código aberto baseado em Vue.js para construir aplicativos com uma única base de código',
            icon: 'o_build'
        },
    ]
}


export default new About();