import React,{useEffect, useRef} from 'react';
import styles from './Card.module.scss';

import HandIcon from '../../assets/icon_hand.png';
import ClickIcon from '../../assets/click_icon.png';

const Card:React.FC<{}> = () => {

    return (
        <div className={styles.wrapper}>
            <section className={styles.click_area}>
                <img className={styles.hand} src={HandIcon} />
                <img className={styles.click} src={ClickIcon} />
            </section>
            <section className={styles.desription}>
                <h2>Click to start get weather</h2>
            </section>
            
        </div>
    )
}

export default Card;