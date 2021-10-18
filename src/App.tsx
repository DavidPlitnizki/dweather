import React, {useState, useEffect} from 'react';
import styles from  './App.module.scss';

import {IWeatherScheme, IWeatherErrorScheme} from './interfaces';

import { useGeoLocation } from './hooks/geoLocation.hook';
import { useFetchLocation } from './hooks/fetchLocation.hook';

import Search from './components/Search/Search';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Header from './components/Header/Header';
import Card from './components/Card/Card';




function App() {
  const [weatherInfo, setWeatherInfo] = useState<IWeatherScheme | IWeatherErrorScheme>();
  const {getGeolocation} = useGeoLocation();
  const {getFetchLocationByGeoCoordinates, getFetchLocationByCityName} = useFetchLocation();

  const [allowGeo, setAllowGeo] = useState(false);

  useEffect(()=> {
    if(allowGeo) {
      console.log("getCurrentLocation")
      getGeolocation(successGetLocation, errorGetLocation);
    }
  },[allowGeo]);

  const successGetLocation = (pos: any) => {
    console.log("successGetLocation: ", pos);
    const position = {
      errorCode: 0,
      coordinats: pos.coords,
      timestamp: pos.timestamp
    }
    setWeatherInfo(position);
  }

  const errorGetLocation = (err:any) => {
    console.log("error: ", err);
    const error = {
      errorCode: err.code,
      description: err.message,
    }
    setWeatherInfo(error)

   
  }

  useEffect(()=> {

    if(allowGeo && weatherInfo?.errorCode === 0) {
      console.log("allowed user and get location: ",weatherInfo.coordinats)
      const result = getFetchLocationByGeoCoordinates({latitude: weatherInfo.coordinats?.latitude, longitude: weatherInfo.coordinats?.longitude});
        
      result.then(
              result => setWeatherInfo(result),
              error => console.log(error)
            )
    }
  },[weatherInfo, allowGeo, getFetchLocationByGeoCoordinates]);

  const findhByCityName = (cityName: any) => {
   const result = getFetchLocationByCityName(cityName);
    result.then(
      result => setWeatherInfo(result),
      error => console.log(error)
    )
  }

  const checkAllowGeolocation = () => {
    if ("geolocation" in navigator) {
      console.log("Available");
      setAllowGeo(true);
    } else {
      console.log("Not Available");
      setAllowGeo(false);
    }
  }
  

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        {!allowGeo && <Card startGetGeo={checkAllowGeolocation} />}
        {allowGeo && <Search searchByCityName={findhByCityName} />}
        {allowGeo &&   <WeatherCard {...weatherInfo}/>}
        
      </div>
    </div>
  );
}

export default App;
