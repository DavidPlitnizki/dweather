import React from "react";
import styles from "./Card.module.css";

import HandIcon from "../../assets/icon_hand.png";
import ClickIcon from "../../assets/click_icon.png";

interface IProps {
  startGetGeo: () => void;
}

const Card: React.FC<IProps> = ({ startGetGeo }) => {
  return (
    <div className={styles.wrapper} onClick={startGetGeo}>
      <section className={styles.click_area}>
        <img alt="hand_icon" className={styles.hand} src={HandIcon} />
        <img alt="click_icon" className={styles.click} src={ClickIcon} />
      </section>
      <section className={styles.desription}>
        <h2>Explore Weather</h2>
      </section>
    </div>
  );
};

export default Card;
