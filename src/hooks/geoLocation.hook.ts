import {useCallback} from 'react';

export const useGeoLocation = () => {

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const getGeolocation = useCallback((successGetLocation, errorGetLocation) => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successGetLocation, errorGetLocation, options);
      }
    },[options]);

    return {getGeolocation};
}