import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experiência" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Ismafer Ferramentas",
    position: "Desenvolvedor Web Jr.",
    time: "Novembro de 2023 - O momento",
    location: "Poções, Bahia",
    description:
      "Atuo no desenvolvimento de uma aplicação fullstack. O projeto visa beneficiar as equipes internas de criação de anúncios, oferecendo automatização de processos de edição e, também, ferramentas de manipulação de imagens. O que proporcionou um aumento gradual na velocidade de criação de novos anúncios para as plataformas de venda digitais.",
    tech: [
      "NextJs",
      "ReactJs",
      "TypeScript",
      "NodeJs",
      "Ruby On Rails",
      "Prisma ORM",
      "MongoDB",
      "TailwindCSS"
    ],
  },

];
