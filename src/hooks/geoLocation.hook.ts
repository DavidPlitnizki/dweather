import {useState, useCallback} from 'react';

export const useGeoLocation = () => {

    const [currGeoLocation, setCurrGeoLocation] = useState<any>();


    const setGeoLocation = useCallback((position: any)=> {
        if(!currGeoLocation) {
            setCurrGeoLocation(position);
        }
    },[currGeoLocation]);

    function success(pos: any) {
        var crd = pos.coords;
      
        console.log('Ваше текущее местоположение:');
        console.log(`Широта: ${crd.latitude}`);
        console.log(`Долгота: ${crd.longitude}`);
        console.log(`Плюс-минус ${crd.accuracy} метров.`);
      };
      
      function error(err:any) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };

      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      

    const getGeolocation = useCallback( async () => {
        if (navigator.geolocation) {
            // navigator.geolocation.getCurrentPosition((position)=> setGeoLocation(position));
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    },[setGeoLocation]);

    return {getGeolocation, currGeoLocation};
}