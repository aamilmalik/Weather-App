import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useEffect, useState } from "react";



function SearchBox({updateInfo}) {
  const api_url = "http://api.openweathermap.org/data/2.5/weather";
  const api_key = "7441c30807175a9f7126624325975948";
  const [city, setCity] = useState("");
  const [err,setErr] = useState(false);

  const getWeather = async () => {
    try{
      const response = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
    const jsonResponse = await response.json();
    let result = {
      city:city,
      temp:jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,
      tempMax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelsLike:jsonResponse.main.feels_like,
      weather:jsonResponse.weather[0].description
    }
    return result;
    }catch(e){
      throw e;
    }
  
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

    const handleSubmit = async (e) => {
  try{
      e.preventDefault();
      setCity("");
     let newInfo = await getWeather();
     updateInfo(newInfo);
     setErr(false)
  }catch(e){
      setErr(true);
  }
  
}

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
          {err && <p style={{color:"red"}}>No Data Found</p>}
      </form>
    </div>
  );
}

export default SearchBox;
