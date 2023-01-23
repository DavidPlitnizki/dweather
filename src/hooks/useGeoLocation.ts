
const OPTIONS = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

export const useGeoLocation = () => {

    const getGeolocation = (successGetLocation: any, errorGetLocation: any) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successGetLocation, errorGetLocation, OPTIONS);
      }
    };

    return {getGeolocation};
}