import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
function handleResponse(response){
    console.log(response.data);

}

    let apiKey = "d23f750b1a155d6884146d06cd0fd211";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="04n" size={25} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">8°</span>
              <span className="WeatherForecast-temperature-min">5°</span>
            </div>
          </div>
           
        </div>
      </div>
    );
}