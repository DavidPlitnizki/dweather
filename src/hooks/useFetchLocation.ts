import { useState } from 'react';
import { toast } from 'react-toastify';
export interface Coordinates {latitude: number | undefined, longitude: number | undefined};

const BASE_URL = import.meta.env.VITE_API_URL;
const APP_ID = import.meta.env.VITE_APPID;

export const useFetchLocation = () => {
    const [isLoading, setIsLoading] = useState(false);

    const getFetchLocationByGeoCoordinates = async (coords: Coordinates) => {
        const result = await fetch(`${BASE_URL}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APP_ID}&units=metric`);
        setIsLoading(true);
        if(result.ok) {
            const data = await result.json();
            setIsLoading(false);
            return data;
        } else {
            setIsLoading(false);
        }
    };

    const getFetchLocationByCityName = async (cityName: string) => {
        try {
            setIsLoading(true);
            const result = await fetch(`${BASE_URL}?q=${cityName}&appid=${APP_ID}&units=metric`);
            if (result?.ok) {
                const data = await result.json();
                return data;
            }
            throw new Error();
        }catch(e: unknown) {
            console.error(e);
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