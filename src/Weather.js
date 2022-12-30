import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
const[weatherData, setweatherData] = useState({loaded: false});
const[city, setCity] = useState(props.defaultCity);

 function handleResponse(response){
 setweatherData({
   loaded: true,
   coordinates: response.data.coord,
   temperature: response.data.temperature,
   humidity: response.data.humidity,
   date: new Date(response.data.time * 1000),
   description: response.data.condition.description,
   icon: response.data.condition.icon,
   wind: response.data.wind.speed,
   city: response.data.city,
 });

}

function search() {
const apiKey = "9ao09f096c1b3ebb7t441ba0b8e0e3d3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse)

}


 function handleSubmit(event){
   event.preventDefault();
   search();
 }

 function updateCity(event){
  setCity(event.target.value);
 }

 if(weatherData.loaded) {
 return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-7">
               <input type="search" placeholder="Enter a city.." 
              className="form-control"
              autoFocus="on"
              onChange={updateCity}
              /> 
              </div>
              <div className="col-2">
              <input type="submit" value="search" 
              className="btn btn-primary" w-100/>
              </div>
              <div className="col-2">
              <input type="submit" value="current" 
              className="btn btn-primary" w-100="true"/>
              </div>
             </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
            
        </div>
    );
 } else{
   search();
  return (
    <TailSpin
      height="80"
      width="80"
      color="#252222"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
 }

}