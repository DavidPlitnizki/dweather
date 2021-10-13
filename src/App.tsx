import React, {useState, useEffect} from 'react';
import styles from  './App.module.scss';

import { useGeoLocation } from './hooks/geoLocation.hook';
import { useFetchLocation } from './hooks/fetchLocation.hook';

import Search from './components/Search/Search';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Header from './components/Header/Header';
import Card from './components/Card/Card';


function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  // const {getGeolocation, currGeoLocation} = useGeoLocation();
  const {getFetchLocationByGeoCoordinates, getFetchLocationByCityName} = useFetchLocation();


  console.log(weatherInfo);

  // useEffect(()=> {getGeolocation()},[getGeolocation]);

  // useEffect(()=> {
  //   if(currGeoLocation) {
  //      const result = getFetchLocationByGeoCoordinates(currGeoLocation.coords);
  //       result.then(
  //         result => setWeatherInfo(result),
  //         error => console.log(error)
  //       )
  //   } 
  // },[currGeoLocation, getFetchLocationByGeoCoordinates]);

  const findhByCityName = (cityName: any) => {
   const result = getFetchLocationByCityName(cityName);
    result.then(
      result => setWeatherInfo(result),
      error => console.log(error)
    )
  }
  

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        <Card />
        {/* <Search searchByCityName={findhByCityName} /> */}
        {/* <WeatherCard {...weatherInfo}/> */}
      </div>
    </div>
  );
}

export default App;
