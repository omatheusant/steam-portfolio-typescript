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
            I&apos;m a <span>Fullstack Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Oi 👋 Eu sou Matheus – Um designer e programador fullstack
            freelancer. Minha paixão pela tecnologia reside em sonhar ideias e
            torná-las realidade com interfaces elegantes. Desenvolvo interfaces
            modernas e de alta qualidade, concentrado em performance, animações,
            responsividade e SEO.
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
