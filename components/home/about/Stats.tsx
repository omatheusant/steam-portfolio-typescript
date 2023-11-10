import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Hard Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Jest</span>
            <span className="chip">Next.js</span>
            <span className="chip">Redux</span>
            <span className="chip">Sass</span>
            <span className="chip">Git/GitHub</span>
            <span className="chip">Figma</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Node.js</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Express</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Soft Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Comunicação</span>
            <span className="chip">Trabalho em equipe</span>
            <span className="chip">Solução de problemas</span>
            <span className="chip">Proatividade</span>
            <span className="chip">Aprendizado contínuo</span>
            <span className="chip">Marketing</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};