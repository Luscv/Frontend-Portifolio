import { TechEntity } from '@/model/entity/Tech.entity';

class About {
    bio = `Sempre em busca de novas experiências e desafios que possam contribuir para meu desenvolvimento profissional.
    Sou extremamente dedicado e gosto de encarar novos desafios a fim de me tornar um profissional cada vez mais experiente, aprendendo cada dia mais e sempre colocando meus conhecimentos em prática.
    Graduando em Análise e desenvolvimento de sistemas, com Inglês fluente.`;
    objetivos =  `Atualmente focado no desenvolvimento Web, estou buscando expandir meu conhecimento em Mobile, utilizando React Native e futuramente Swift para desenvovimento nativo iOS.
    Estudando Node para de backend visando melhorias em projetos pessoais.`;
    tech: Array<TechEntity> = [
        {
            id: 1,
            title: 'Javascript',
            description: `Utilizado durante a graduação e cursos sobre desenvolvimento,
            atuei com javascript durante o período estágio e alguns projetos pessoais`,
            icon: 'o_code'
        },
        {
            id: 2,
            title: 'Typescript',
            description: `Atualmente trabalhando com Typescript profissionalmente como também
            sendo minha preferência no desenvolvimento de aplicações web`,
            icon: 'o_code'
        },
        {
            id: 3,
            title: 'Vue',
            description: `Atuando como Developer com Vue em duas experiências profissionais,
            além de utilizar o framework na maioria dos meus projetos pessoais em web`,
            icon: 'o_build'
        },
        {
            id: 4,
            title: 'React Native',
            description: `Utilizado em desenvolvimento de projetos pessoais com foco no aprendizado, 
            conclusão de curso focado em react native e uso do framework em disciplima de graduação`,
            icon: 'o_build'
        },
        {
            id: 5,
            title: 'React',
            description: `Utilizado em alguns projetos pessoais além de participações em eventos de plataformas de programação
            e cursos focados no desenvolvimento com React + Redux`,
            icon: 'o_build'
        },
        {
            id: 6,
            title: 'NodeJs',
            description: `Utilizado em participações de eventos das plataformas de programação
            além de breve contato em projetos pessoais. Pretendo me aprofundar no estudo de backend utilizando Node`,
            icon: 'o_build'
        },
        
    ]
}


export default new About();