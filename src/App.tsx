import React, {useState, useEffect, useCallback} from 'react';
import styles from  './App.module.scss';


import { ToastContainer } from 'react-toastify';

import { useGeoLocation } from './hooks/useGeoLocation';
import { useFetchLocation } from './hooks/useFetchLocation';

import Search from './components/Search/Search';
import WeatherCard from './components/WeatherCard/WeatherCard';

import Header from './components/Header/Header';
import Card from './components/Card/Card';

import {IWeatherObject} from './interfaces';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [weatherInfo, setWeatherInfo] = useState<IWeatherObject | null>(null);
  // const {getGeolocation} = useGeoLocation();
  const {getFetchLocationByCityName} = useFetchLocation();

  const [allowGeo, setAllowGeo] = useState(false);
  const [exploreWeather, setExploreWeather] = useState<Boolean>(false);

  // useEffect(()=> {
  //   if(allowGeo) {
  //     console.log("getCurrentLocation")
  //     getGeolocation(successGetLocation, errorGetLocation);
  //   }
  // },[allowGeo]);

  // const successGetLocation = (pos: any) => {
  //   console.log("successGetLocation: ", pos);
  //   const position = {
  //     errorCode: 0,
  //     coordinats: pos.coords,
  //     timestamp: pos.timestamp
  //   }
  //   setWeatherInfo(position);
  // }

  // const errorGetLocation = (err:any) => {
  //   console.log("error: ", err);
  //   const error = {
  //     errorCode: err.code,
  //     description: err.message,
  //   }
  //   setWeatherInfo(error)
  // }

  // useEffect(()=> {
  //   if(allowGeo && weatherInfo?.errorCode === 0) {
  //     console.log("allowed user and get location: ",weatherInfo.coordinats)
  //     const result = getFetchLocationByGeoCoordinates({latitude: weatherInfo.coordinats?.latitude, longitude: weatherInfo.coordinats?.longitude});
        
  //     result.then(
  //             result => setWeatherInfo(result),
  //             error => console.log(error)
  //           )
  //   }
  // },[weatherInfo, allowGeo, getFetchLocationByGeoCoordinates]);

  const findhByCityName = useCallback(async(cityName: string) => {
   const result = await getFetchLocationByCityName(cityName);

   if (result) {
    const weatherData = {
      name: result.name,
      sysCountry: result?.sys?.country,
      feelsLike: result?.main?.feels_like,
      temp: result?.main?.temp,
      ...result?.weather?.[0],
    }
    setWeatherInfo(weatherData);
   } else {
    setWeatherInfo(null);
   }
  }, []);

  const startExplore = useCallback(() => {
    setExploreWeather(true);
  }, []);
  
  // console.log("weatherInfo: ", weatherInfo);

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        {!exploreWeather && <Card startGetGeo={startExplore} />}
        {exploreWeather && <Search searchByCityName={findhByCityName} />}
        {weatherInfo && <WeatherCard weatherData={weatherInfo}/>}
        
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
