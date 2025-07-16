import React from "react";
import type { JSX } from "react";
import styles from "../styles/header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>concats</h1>
    </header>
  );
};

export default Header;
