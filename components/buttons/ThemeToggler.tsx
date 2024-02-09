import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./themetoggler.module.scss";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={toggleTheme} className={styles.icons}>
      {theme === "light" ? <Sun size="3.0rem" /> : <Moon size="3.0rem" />}
    </div>
  );
};

export default ThemeToggler;
