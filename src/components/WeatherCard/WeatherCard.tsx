import React from 'react';
import styles from './WeatherCard.module.scss';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
const tempImg = require("../../assets/temp.svg") as string;

const WeatherCard:React.FC<{}> = (props: any) => {

    const weather = props?.weather?.filter((item: boolean) => item)[0];

    const addToFavorite = () => {
        console.log("add to favorite")
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_location_name}>
                <p>{`${props.name},${props?.sys?.country || "-"}`}</p>
                <Fab color="primary" aria-label="add" onClick={addToFavorite}>
                    <AddIcon />
                </Fab>
            </div>
            <div className={styles.info_block}>
                <p>Temperature: </p>
                <div className={styles.info_values}>
                    <span>{props?.main?.temp}&#8451;<img className={styles.temp_img} src={tempImg} alt="temperature" /></span>
                    <span>feels like: {props?.main?.feels_like}&#8451;<img className={styles.temp_img} src={tempImg} alt="temperature" /></span>
                </div>
            </div>
            <div className={styles.info_block}>
                <p>Weather:</p>
                <div className={styles.info_values}>
                    <span>{weather?.main}</span>
                    <span><img alt="weather" src={`http://openweathermap.org/img/w/${weather?.icon}.png`} /></span>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;