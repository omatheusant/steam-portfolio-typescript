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
    tech: ["React", "NextJs", "Styled-Components", "Axios", "Sass","API", "TypeScript"],
    description:
      " O AstroHub é um projeto de que representa a síntese da tecnologia e da fascinação pelo cosmos. Desenvolvida em React com Next.js, esta Landing Page interativa sobre astronomia oferece uma experiência envolvente para os entusiastas do espaço.",
    modalContent: (
      <>
        <p>
          Principais características e tecnologias utilizadas:
        </p>
        <ul>
           <li> Desenvolvida em React com Next.js para garantir alta performance e otimização de SEO.</li>
           <li>Integração de APIs, incluindo a Astronomy Picture of The Day e Solar System OpenData, para oferecer imagens e informações astronômicas atualizadas.</li>
           <li>Design responsivo e interativo que se adapta perfeitamente a diversos dispositivos, proporcionando uma experiência de usuário consistente.</li>
           <li>Navegação intuitiva e fácil de usar, permitindo aos visitantes explorar o vasto universo com facilidade.</li>
           <li>Foi utilizado o TypeScript para fornecer um código tipado e de fácil entendimento.</li>
        </ul>
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
