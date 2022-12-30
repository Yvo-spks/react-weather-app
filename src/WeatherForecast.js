import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);

}

    if(loaded) {
      
      return (
        <div className="WeatherForecast">
          <div className="row">
            <div className="col">
              <WeatherForecastDay data={forecast}/>
            </div>
          </div>
        </div>
      );
      
    } else {
     let apiKey = "9ao09f096c1b3ebb7t441ba0b8e0e3d3";
     let longitude = props.coordinates;
     let latitude = props.coordinates;
     let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handleResponse);

     return null;
    }
}