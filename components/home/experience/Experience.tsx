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
    title: "Infotech",
    position: "Social Media",
    time: "Novembro de 2022 - Novembro de 2023 ",
    location: "Poções, Bahia",
    description:
      "Atuo como Social Media realizando as seguintes atribuições: atendimento ao cliente via chat, planejamento e criação de conteúdo, elaboração de artes e gestão de mídias sociais.",
    tech: [
      "Excell",
      "Adobe Photoshop",
      "Canva",
      "Notion",
    ],
  },

];
