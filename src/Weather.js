import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
const[weatherData, setweatherData] = useState({loaded: false});
const[city, setCity] = useState(props.defaultCity);

 function handleResponse(response){
  
 setweatherData({
   loaded: true,
   temperature: response.data.main.temp,
   humidity: response.data.main.humidity,
   date: new Date(response.data.dt * 1000),
   description: response.data.weather[0].description,
   icon: response.data.weather[0].icon,
   wind: response.data.wind.speed,
   city: response.data.name,
 });

}

function search() {
const apiKey = "d23f750b1a155d6884146d06cd0fd211";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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