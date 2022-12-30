import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul className="basic-descprition">
          <li>
            <FormattedDate date={props.data.date} />
          </li>

          <li>{props.data.description}</li>
        </ul>

        <h2>
          <WeatherIcon code={props.data.icon} size={50} />
        </h2>

        <div className="row">
          <div className="col-6">
            
             <WeatherTemperature celsius= {props.data.temperature}/>
             
            
          </div>
          <div className="col-6">
            <ul className="description">
              <li>Humidity:{props.data.humidity}%</li>
              <li>Wind:{Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}