import React, { useState } from "react";
import Date from "./Date";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
const[weatherData, setweatherData] = useState({loaded: false});

 function handleResponse(response){
 setweatherData({
    loaded:true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    wind: response.data.wind.speed,
    city: response.data.name
 });

 

}

 if(weatherData.loaded) {
 return (
        <div className="Weather">
            <form>
            <div className="row">
                <div className="col-7">
               <input type="search" placeholder="Enter a city.." 
              className="form-control"
              autoFocus="on"
              /> 
              </div>
              <div className="col-2">
              <input type="submit" value="search" 
              className="btn btn-primary" w-100/>
              </div>
              <div className="col-2">
              <input type="submit" value="current" 
              className="btn btn-primary" w-100/>
              </div>
             </div>
            </form>
            <h1>
                {weatherData.city}
            </h1>
            <ul className="basic-descprition">
               <li>
               <Date date = { weatherData.date} />
              </li> 
               <li>{weatherData.description}</li>
            </ul>
            <h2>
            <img 
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
               alt=""
               width= "100"
                />
             </h2>
            
            <div className="row">
             <div className="col-6">
               <span className="temperature">{Math.round(weatherData.temperature)}</span>
               <span className="unit">℃</span>
             </div>
             <div className="col-6">
                <ul className="description">
                  <li>Humidity:{weatherData.humidity}%</li>
                  <li>Wind:{Math.round(weatherData.wind)}km/h</li>  
                </ul>

             </div>
            </div>
        </div>
    );
 } else{
   const apiKey = "22600970cc1e19a65b9eea57b485b5ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`

   axios.get(apiUrl).then(handleResponse)

   return "Loading..."
 }

}