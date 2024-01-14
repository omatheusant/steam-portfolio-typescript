import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Matheus<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Frontend Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Oi 👋 Eu sou Matheus Santana – designer e programador frontend com 8 meses experiência. Minha paixão pela tecnologia reside em transformar ideias em realidade com interfaces elegantes. Uso de minha expertise para criar produtos digitais que ofereçam experiência, performance e qualidade de código. 
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Fale comigo
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
