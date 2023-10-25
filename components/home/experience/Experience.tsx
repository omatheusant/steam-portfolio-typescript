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
    title: "Supermercado Ferreirão II ",
    position: "Auxiliar Administrativo",
    time: "Novembro de 2023 - Presente",
    location: "Poções, Bahia",
    description:
      "Atuo como suporte administrativo realizando as seguintes atribuições: atendimento ao cliente (externo e interno), elaboração e gestão de planilhas, organização de documentos e emissão de notas fiscais.",
    tech: [
      "Pacote Office",
      "Conta Azul",
      "Agendor",
      "Trello",
    ],
  },

];
