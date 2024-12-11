import React from "react";
import styles from "./Header.module.css";

const Header: React.FC<{}> = () => {
  return (
    <header className={styles.wrapper}>
      <h1>D - WEATHER</h1>
    </header>
  );
};

export default Header;
