import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projetos" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Ismafer Tools",
    imgSrc: "project-imgs/ismafer-tools.png",
    code: "https://github.com/omatheusant/ismafer-tools-guest",
    projectLink: "https://ismafer-tools-main.vercel.app/",
    tech: ["Next.js", "TypeScript", "NextAuth.js", "Fabric.js", "TailwindCSS", "Vitest", "Rest API", "Prisma", "Node.js", "Express", "MongoDB"],
    description:
      "Aplicativo web para edição e manipulação de imagens com foco na criação de anúncios com inúmeras funcionalidades como: autenticação e autorização baseada em cargos, automatização de cortes em imagens, removedor automático de fundo e editor Canva para a criação de capas personalizadas. 🔧",
    modalContent: (
      <>
        <h2>Principais características</h2>
        <h3>Em desenvolvimento...</h3>
      </>
    ),
  },
  {
    title: "Admin Ecommerce Dashboard",
    imgSrc: "project-imgs/ecommerce-store.png",
    code: "https://github.com/omatheusant/ismafer-tools-guest",
    projectLink: "https://ecommerce-admin-dashoard.vercel.app/",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Shadcn/UI", "Rest API", "Prisma ORM", "PlanetScale", "MySQL", "Cloudinary"],
    description:
      "Um Dashboard de Administração de conteúdo com um Sistema de Gerenciamento de Conteúdo (CMS) construído do zero para o desenvolvimento de um e-commerce fullstack. O objetivo desse projeto é criar um dashboard simples e direto capaz de gerenciar os conteúdos essênciais para um e-commerce como: pedidos, categorias, produtos, etc...",
    modalContent: (
      <>
        <h2>Principais características</h2>
        <p>Next.js 14 App Router para a criação de uma aplicação fullstack com alto desempenho e roteamento dinâmico</p>
        <p>Tailind e Shadcn/ui para a estilização e criação de componentes reutilizáveis</p>
        <p>Rotas de API dinâmicas para a criação, manuntenção e gerenciamento de conteúdos do e-commerce.</p>
        <p>Prisma ORM + PlanetScale + MySQL para o gerenciamento de dados</p>
        <p>Cloudinary para o upload e armazenamento de imagens na nuvem. Possibilitando um sistema simples de upload e gerenciamento de imagens para cada produto.</p>
        <p>Stripe foi o intermediador escolhido para a realização de pagamentos e checkout</p>
      </>
    ),
  },
  {
    title: "Portfólio",
    imgSrc: "project-imgs/portfolio.png",
    code: "https://github.com/omatheusant/steam-portfolio-typescript",
    projectLink: "https://matheusant.vercel.app/",
    tech: ["React", "NextJS", "Sass", "TypeScript"],
    description:
      "Um portfólio moderno, elegante e minimalista. Steam é um projeto designado para desenvolvedores/designers com o objetivo de ser um template completo com componentes reutilizáveis.",
    modalContent: (
      <>
        <h2>Principais características</h2>
        <p>
          Desenvolvido em React com Next.js, esse template busca oferecer uma interface moderna, elegante e direta. Onde todas as informações são dispostas em uma única página com componentes interativos e dinâmicos.
        </p>
        <p>
          Foi utilizado o Sass para as estilizações. Além disso, as variáveis globais possibilitam uma fácil edição de cores, tornando o template ainda mais fácil de ser completamente editável.
        </p>
        <p>Typescript para uma tipagem estática e segura, possibilitando uma maior segurança de código.</p>
      </>
    ),
  },
  {
    title: "AstroHub",
    imgSrc: "project-imgs/astrohub.png",
    code: "https://github.com/omatheusant/astrohub-oficial",
    projectLink: "https://astrohub.vercel.app/",
    tech: ["React", "NextJs", "Styled-Components", "Axios", "Sass", "REST API", "TypeScript"],
    description:
      "O AstroHub é um projeto que representa a síntese da minha paixão pelo código e da fascinação pelo cosmos. Desenvolvida em React com Next.js, esta Landing Page interativa sobre astronomia oferece uma experiência envolvente para os entusiastas do espaço. 🚀",
    modalContent: (
      <>
        <h2>
          Principais características
        </h2>

        <p>Landing Page simples e intuitiva desenvolvida em Nextjs para uma boa performance.</p>
        <p>Estilização feita com Sass e Styled-Components visando a criação de estilos reutilizáveis e de fácil manutenção</p>
        <p>Axios foi a biblioteca utilizada para realizar o fetch nas APIs necessárias para o projeto devido a sua segurança e fácil usabilidade </p>
        
        <p>Astronomy Picture of the Day: API da NASA usada para exibir {"imagem do dia"}de acordo com a data atual.</p>

        <p>SpaceNews API: Minha própria API desenvolvida com Node.js e Express com o objetivo de exibir notícias acerca do espaço.</p>

        <p>SolarSystem OpenData: Usada para exibir dados atualizados em tempo real sobre o sistema solar.</p>

        <p>Para as animações e slide, foi utilizado as bibliotecas framer-motion e swiper-slide.</p>
      </>
    ),
  }

];
