import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillCodepenCircle,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggler from "@/components/buttons/ThemeToggler";

interface MylinksProp {
  variant?: "toggle";
}

export const MyLinks = ({ variant }: MylinksProp) => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/omatheussant"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="3.0rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://www.github.com/omatheusant"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="3.0rem" />
        </Link>
      </motion.span>
      {variant === "toggle" && (
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ThemeToggler />
        </motion.span>
      )}
    </div>
  );
};
