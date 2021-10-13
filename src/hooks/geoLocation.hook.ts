import {useState, useCallback} from 'react';

export const useGeoLocation = () => {

    const [currGeoLocation, setCurrGeoLocation] = useState<any>();


    const setGeoLocation = useCallback((position: any)=> {
        if(!currGeoLocation) {
            setCurrGeoLocation(position);
        }
    },[currGeoLocation]);

    const getGeolocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=> setGeoLocation(position));
        }
    },[setGeoLocation]);

    return {getGeolocation, currGeoLocation};
}