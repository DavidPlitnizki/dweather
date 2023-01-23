import {useCallback} from 'react';
import env from '../config.json';
export interface Coordinates {latitude: number | undefined, longitude: number | undefined};

export const useFetchLocation = () => {
    
    const getFetchLocationByGeoCoordinates = useCallback(async (coords: Coordinates) => {
        const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${env.appid}&units=metric`);
        if(result.ok) {
            const data = await result.json();
            return data;
        } else {
            throw new Error("Error!!!");
        }
    },[])

    const getFetchLocationByCityName = useCallback(async (cityName) => {
        const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${env.appid}&units=metric`);
        if(result.ok) {
            const data = await result.json();
            return data;
        } else {
            throw new Error("Error!!!");
        }
    },[])


    return { getFetchLocationByGeoCoordinates, getFetchLocationByCityName };
}