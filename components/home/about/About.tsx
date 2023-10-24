import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
            Me chamo Matheus Santana, tenho 20 anos e sou apaixonado desde criança por tecnologia, jogos e programação. Quando mais jovem, programei em Javascript e Ruby, criando jogos e programas.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            Em 2023, decidi retomar meus estudos em programação. Desta vez, focando em Javascript para a área de Desenvolvimento Frontend. Escolhi o Javascript devido a sua grande comunidade, enorme potencial de crescimento e sua grande adaptabilidade que se expande para a Web, Mobile e Backend, através de React e Node.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            Atuo como freelancer visando desenvolver minhas habilidades e criar conexões significativas enquanto desenvolvo meus projetos pessoais.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            Estou buscando minha primeira vaga onde possa fundir meu amor pelo código com a comunicação. Se você tem uma vaga que eu poderia gostar, vamos nos conectar! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
