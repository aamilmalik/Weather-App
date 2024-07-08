import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox"

function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
            city: "Delhi",
            feelsLike: 37.05,
            humidity: 84,
            temp: 30.05,
            tempMax: 30.05,
            tempMin: 30.05,
            weather: "mist",
    });
    const updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return ( 
        <div style={{textAlign:"center"}}>
            <h2>Weather Apppp</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
     );
}

export default WeatherApp;