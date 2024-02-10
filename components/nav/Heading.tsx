import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks variant="toggle" />
      <OutlineButton onClick={() => window.open("/CV-Matheus-Fullstack.pdf")}>
        Currículo
      </OutlineButton>
    </header>
  );
};
