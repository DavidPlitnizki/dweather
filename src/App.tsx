import React, {useState, useCallback} from 'react';
import styles from  './App.module.scss';


import { ToastContainer } from 'react-toastify';
import { useFetchLocation } from './hooks/useFetchLocation';
import Search from './components/Search/Search';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import {IWeatherObject} from './interfaces';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [weatherInfo, setWeatherInfo] = useState<IWeatherObject | null>(null);
  const {getFetchLocationByCityName} = useFetchLocation();

  const [exploreWeather, setExploreWeather] = useState<Boolean>(false);

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
