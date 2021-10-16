import React, {useState, useEffect, useRef} from 'react';
import styles from  './App.module.scss';

import { useGeoLocation } from './hooks/geoLocation.hook';
import { useFetchLocation } from './hooks/fetchLocation.hook';

import Search from './components/Search/Search';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Header from './components/Header/Header';
import Card from './components/Card/Card';


function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const {getGeolocation, currGeoLocation} = useGeoLocation();
  const {getFetchLocationByGeoCoordinates, getFetchLocationByCityName} = useFetchLocation();

  const [allowGeo, setAllowGeo] = useState(false);

  console.log(weatherInfo);

  useEffect(()=> {
    if(allowGeo) {
      const location = getGeolocation();
      console.log("location: ", location);
    }
  });

  // useEffect(()=> {
  //   if(currGeoLocation) {
  //      const result = getFetchLocationByGeoCoordinates(currGeoLocation.coords);
  //       result.then(
  //         result => setWeatherInfo(result),
  //         error => console.log(error)
  //       )
  //   } 
  // },[currGeoLocation, getFetchLocationByGeoCoordinates]);

  // const findhByCityName = (cityName: any) => {
  //  const result = getFetchLocationByCityName(cityName);
  //   result.then(
  //     result => setWeatherInfo(result),
  //     error => console.log(error)
  //   )
  // }

  const checkAllowGeolocation = () => {
    console.log("check geolocation: ", navigator);
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
        {/* <Search searchByCityName={findhByCityName} /> */}
        {allowGeo && <WeatherCard {...weatherInfo}/>}
      </div>
    </div>
  );
}

export default App;
