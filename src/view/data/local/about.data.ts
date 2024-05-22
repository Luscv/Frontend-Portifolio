import { TechEntity } from '@/model/entity/Tech.entity';

class About {
    bio = `Apaixonado por música e tecnologia, sempre aprimorando minhas habilidades como Engenheiro de Software através de novos desafios. Com experiência academica em Ciência da Computação e atualmente em Análise e desenvolvimento de sistemas, hoje estou focado em desenvolvimento frontend e mobile. Além de possuir inglês fluente, me destaco por minhas excelentes habilidades interpessoais, adquiridas em minhas experiências com vendas e trabalhos como freelancer na música.\r\n
    Autodidata, dedico meu tempo livre a aprender sobre temas que me inspiram, como programação, produção musical e criação de vídeos. Reconhecido por minha dedicação, já fui premiado em torneios de robótica no ensino médio, prêmio na música com uma produção autoral além de grandes entregas de projetos no meu trabalho como desenvolvedor.`;
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



// BIO ENGLISH


// Avid music and technology enthusiast, I'm constantly seeking opportunities to enhance my software development expertise. Possessing a solid academic background in Computer Science, currently pursuing expertise in Systems Analysis and Development, I'm currently specializing in frontend and mobile development. In addition to being a fluent English speaker, I stand out for my excellent interpersonal skills, acquired through my experience in sales and freelance work in music.
// As self-taught learner, I dedicate my free time to exploring topics that ignite my passion, such as programming, music production and video editing. Recognized for my dedication, I've been awarded in robotics tournaments in high school, a music award with an original production and also made great project deliveries in my work as a developer.