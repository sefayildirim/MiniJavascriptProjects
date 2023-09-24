//
import {useEffect, useState} from "react";
import axios from "axios";
import useGeolocation from "react-hook-geolocation";
import {WeatherForecast} from "./components/WeatherForecast.jsx";

function App() {
    const [weather, setWeather] = useState();
    const {latitude, longitude} = useGeolocation();
    const getWeatherData = async (lat,lon) => {
        const key = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
        const lang = navigator.language.split("-")[0];
        //console.log(lang)
        try {
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`)
            setWeather(data)
        }catch (e) {
            alert("Veri alınırken hata oluştu")
        }
    }
    useEffect(()=>{
        latitude && longitude && getWeatherData(latitude,longitude);
    },[latitude, longitude])

    return (
    <>
        <WeatherForecast weather={weather} />
    </>
  )
}

export default App
