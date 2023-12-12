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
    title: "AstroHub (em andamento)",
    imgSrc: "project-imgs/astrohub.png",
    code: "https://github.com/omatheusant/astrohub-oficial",
    projectLink: "https://astrohub.vercel.app/",
    tech: ["React", "NextJs", "Styled-Components", "Axios", "Sass", "API", "TypeScript"],
    description:
      " O AstroHub é um projeto que representa a síntese da minha paixão pelo código e da fascinação pelo cosmos. Desenvolvida em React com Next.js, esta Landing Page interativa sobre astronomia oferece uma experiência envolvente para os entusiastas do espaço. 🚀",
    modalContent: (
      <>
        <p>
          Principais características e tecnologias utilizadas:
        </p>
        <p> Decidi utilizar o axios para consumir três APIs diferentes, que são:</p>

        <p>Astronomy Picture of the Day: API da NASA usada para exibir{ "imagem do dia" }de acordo com a data atual.</p>

        <p>SpaceNews API: Minha própria API desenvolvida com Node.js e Express com o objetivo de exibir notícias acerca do espaço.</p>

        <p>SolarSystem OpenData: Usada para exibir dados atualizados em tempo real sobre o sistema solar.</p>

        <p>Para as animações e slide, utilizei as libs framer-motion e swiper slide.</p>
        <p>
          Meus planos para esse projeto são grandes. Atualmente, busco implementar meus conhecimentos de Backend com NodeJS para expandir ainda mais as possibilidades e qualidades do projeto.
        </p>
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
        <p>
          Desenvolvido em React com Next.js, esse template busca oferecer uma interface moderna, elegante e direta. Onde todas as informações são dispostas em uma única página com componentes interativos e dinâmicos.
        </p>
        <p>
            Foi utilizado o Sass para as estilizações. Além disso, as variáveis globais possibilitam uma fácil edição de cores, tornando o template ainda mais fácil de ser completamente editável.
        </p>
      </>
    ),
  },

];
