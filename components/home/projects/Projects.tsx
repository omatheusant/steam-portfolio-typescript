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
    code: "https://github.com/omatheusant/astrohub",
    projectLink: "https://astrohub.vercel.app/",
    tech: ["React", "Styled-Components", "API", "TypeScript"],
    description:
      " Uma comunidade para entusiastas da astronomia que consome a API da NASA. O AstroHub possui diversos artigos, notícias e imagens recentes do espaço ",
    modalContent: (
      <>
        <p>
          AstroHub é uma comunidade para entusiastas da astronomia. Um site único, elegante e responsivo que busca oferecer ao usuário uma ótima experiência com artigos, notícias do espaço e informações atualizadas em tempo real.
        </p>
        <p>
          Descubra o Cosmos! Graças a API da NASA  Astronomy Picture of The Day (APOD), cada dia é apresentado uma imagem ou fotografia diferente do nosso fascinante universo, juntamente com uma breve explicação escrita por um astrônomo profissional. Além disso, o usuário também pode se divertir pesquisando a foto de qualquer data de sua preferência.
        </p>
        <p>
          O AstroHub também apresenta dados dos do nosso Sistema Solar Atualizados em tempo  real com o consumo da API Solar System OpenData.
        </p>
        <p>
          Meus planos para esse projeto são grandes. Atualmente, busco implementar meus conhecimentos de Backend com NodeJS para possibilitar a criação de contas e expandir ainda mais a experiência e qualidade do projeto.
        </p>
      </>
    ),
  },
  {
    title: "Portfólio",
    imgSrc: "project-imgs/portfolio.png",
    code: "https://github.com/omatheusant/steam-portfolio-typescript",
    projectLink: "https://vercel.com/omatheusants-projects/matheusant",
    tech: ["React", "NextJS", "Sass", "TypeScript"],
    description:
      "Esse portfólio também é um projeto de minha autoria! Cconstruído em NextJS, o objetivo deste projeto é trazer uma ótima experiência ao usuário com animações e componentes interativos",
    modalContent: (
      <>
        <h2>
          [Descrição em desenvolvimento...]
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
 
];
