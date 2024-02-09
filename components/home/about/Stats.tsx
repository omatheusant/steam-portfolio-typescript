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
            <span>Frontend</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Next.js</span>
            <span className="chip">React</span>
            <span className="chip">TypeScript</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Sass</span>
            <span className="chip">Jest</span>
            <span className="chip">Testing Libary</span>
            <span className="chip">Redux</span>
            <span className="chip">Figma</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Backend/DevOps</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Docker</span>
            <span className="chip">Cloud</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express</span>
            <span className="chip">Python</span>
            <span className="chip">SQL</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">MySQL</span>
            <span className="chip">MongoDB</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
