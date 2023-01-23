import { useState } from 'react';
import env from '../config.json';
import { toast } from 'react-toastify';
export interface Coordinates {latitude: number | undefined, longitude: number | undefined};

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const useFetchLocation = () => {
    const [isErrorMSG, setIsErrorMSG] = useState<String>('');
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const getFetchLocationByGeoCoordinates = async (coords: Coordinates) => {
        const result = await fetch(`${BASE_URL}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${env.appid}&units=metric`);
        setIsLoading(true);
        setIsErrorMSG('');
        if(result.ok) {
            const data = await result.json();
            setIsLoading(false);
            return data;
        } else {
            setIsLoading(false);
            setIsErrorMSG(result?.statusText);
        }
    };

    const getFetchLocationByCityName = async (cityName: string) => {
        try {
            setIsLoading(true);
            const result = await fetch(`${BASE_URL}?q=${cityName}&appid=${env.appid}&units=metric`);
            if (result?.ok) {
                setIsErrorMSG('');
                const data = await result.json();
                return data;
            }
            throw new Error();
        }catch(e) {
            toast(`ERROR!!! Something was wrong, please try again`, {
                type: "error",
                position: "top-center",
            });
        } finally{
            setIsLoading(false);
        }
    };


    return { getFetchLocationByGeoCoordinates, getFetchLocationByCityName, isLoading };
}