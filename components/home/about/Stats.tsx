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
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Jest</span>
            <span className="chip">Testing Library</span>
            <span className="chip">Next.js</span>
            <span className="chip">Redux</span>
            <span className="chip">Axios</span>
            <span className="chip">React Query</span>
            <span className="chip">Git/GitHub</span>
            <span className="chip">Figma</span>
            <span className="chip">TailwindCSS</span>
            <span className="chip">Styled-components</span>
            <span className="chip">SASS</span>
            <span className="chip">Material UI</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Backend</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Node.js</span>
            <span className="chip">TypeScript</span>
            <span className="chip">SQL e noSQL</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">API REST</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Express</span>
            <span className="chip">DBeaver</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
