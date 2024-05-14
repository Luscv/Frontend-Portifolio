import { ExperienceEntity } from '../../../model/entity/Experience.entity';

class Experience {
    jobs: Array<ExperienceEntity> = [
        {
            id: 1,
            title: 'Estagiário de desenvolvimento',
            date: '03/2023',
            body: `Estágio na área de desenvolvimento de sistemas internos da Empresa, bem como prestação de serviços de front-end, back-end e fullstack. \n
            Funções: \n
            - Desenvolvimento de relatórios, dashes e página de vendas para parceiros utilizando VueJs e Quasar. \n
            - Resolução de chamados no sistema Sankhya, utilizando SQL Server para análise e relatórios da empresa \n
            Tecnologias: VueJs, Quasar, Pínia e vuex, SQL Server.`
        },
        {
            id: 2,
            title: 'Desenvolvedor de front-end',
            date: '11/2023',
            body: `Participação no desenvolvimento dos seguintes projetos: \n
            - ChatBot: Ferramenta de atendimento automático institucional \n
            - Fala Defensoria: Canal de comunicação online com o objetivo de agilizar a interação entre a população e os defensores públicos \n
            - Correção de bugs e criação de melhorias de diversos projetos em produção \n
            - Migração de projetos em Vue 2 para Vue 3 \n
            Tecnologias: Vue, quasar, pínia, typescript`
        },
    ];
    education: Array<ExperienceEntity> = [
        {
            id: 1,
            title: 'Ciência da Computação - UFV',
            date: '03/2018',
            body: 'Bacharelado em ciência da computação na Universidade Federal de Viçosa'
        },
        {
            id: 2,
            title: 'Análise e Desenvolvimento de Sistemas - Estácio',
            date: '10/2022',
            body: 'Formação em Analise e Desenvolvimento de sistemas na faculdade Estácio'
        },
        {
            id: 1,
            title: 'Curso - React & Redux',
            date: '01/2024',
            body: `Aprendizado de React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node \n 
            54,5 horas no total`
        },
        {
            id: 1,
            title: 'Curso - React Native: Desenvolva APPs Nativas para Android e iOS',
            date: '04/2024',
            body: `Aprendizado dos fundamentos de React Native, boas práticas e construção de aplicações nativas para Android e iOS \n
            45 horas no total`
        },
    ];
    
}

export default new Experience();
