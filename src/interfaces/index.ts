export interface IWeatherScheme {
    errorCode: number,
    coordinats: ICoordsScheme;
    timestamp?: number
  }
  
  export interface ICoordsScheme {
    accuracy: number
    altitude: any
    altitudeAccuracy: any
    heading: any
    latitude: number
    longitude: number
    speed: any
  }
  
  export interface IWeatherErrorScheme {
    errorCode: number,
    description: string,
    coordinats?: ICoordsScheme
  }

  export interface IWeatherObject {
    description: string,
    feelsLike: number,
    icon: string,
    id: number,
    main: string,
    name: string,
    sysCountry: string,
    temp: number,
  }