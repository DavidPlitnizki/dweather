import React from 'react';
import styles from './WeatherCard.module.scss';

import {IWeatherObject} from '../../interfaces';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
const tempImg = require("../../assets/temp.svg") as string;


interface IProps {
    weatherData: IWeatherObject
};

const WeatherCard:React.FC<IProps> = ({weatherData}) => {

    const addToFavorite = () => {
        console.log("add to favorite")
    }

    if (!weatherData) {
        return null;
    }

    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.wrapper_location_name}>
                <p>{`${weatherData?.name},${weatherData?.sysCountry || "-"}`}</p>
                {/* <Fab color="primary" aria-label="add" onClick={addToFavorite}>
                    <AddIcon />
                </Fab> */}
            </div>
            <div className={styles.info_block}>
                <p>Temperature: </p>
                <div className={styles.info_values}>
                    <span>{weatherData?.temp}&#8451;<img className={styles.temp_img} src={tempImg} alt="temperature" /></span>
                    <span>feels like: {weatherData?.feelsLike}&#8451;<img className={styles.temp_img} src={tempImg} alt="temperature" /></span>
                </div>
            </div>
            <div className={styles.info_block}>
                <p>Weather:</p>
                <div className={styles.info_values}>
                    <span>{weatherData?.description}</span>
                    <span><img alt="weather" src={`http://openweathermap.org/img/w/${weatherData?.icon}.png`} /></span>
                </div>
            </div>
        </div> 
    </>
    )
}

export default WeatherCard;