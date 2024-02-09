import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contato<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Me envie um email para conversarmos. Você também pode me encontrar
            no{" "}
            <Link
              href="https://www.linkedin.com/in/omatheussant"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            se desejar mais praticidade.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:mat.alvessantana@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>mat.alvessantana@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
