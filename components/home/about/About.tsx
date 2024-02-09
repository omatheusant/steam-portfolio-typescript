import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Sobre" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Me chamo Matheus Santana, tenho 20 anos e meu primeiro contato com
              programação foi ainda na infância, quando criei um jogo utilizando
              uma ferramenta chamada RPG Maker. Que, em sua base, utilizava
              scripts em{" "}
              <span style={{ color: "var(--brand)" }}>JavaScript</span> e{" "}
              <span style={{ color: "var(--brand)" }}>Ruby</span>.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Hoje, atuo como{" "}
              <span style={{ color: "var(--brand)" }}>Freelancer</span> e também
              sou{" "}
              <span style={{ color: "var(--brand)" }}>Desenvolvedor Web </span>
              na Ismafer Ferramentas, um dos maiores e-commerces de ferramentas
              do Mercado Livre no Brasil. Onde recentemente desenvolvi uma
              ferramenta web de design para uso interno que trouxe um aumento de
              velocidade na criação de anúncios para diferentes markteplaces e,
              lucros significativos em comparação a ferramentas pagas.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Vamos nos <span style={{ color: "var(--brand)" }}>conectar</span>?
              🔗
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
