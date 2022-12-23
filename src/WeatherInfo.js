import React from "react";
import Date from "./Date";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul className="basic-descprition">
          <li>
            <Date date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <h2>
          <img src="/"
           alt="" 
           width="100" />
        </h2>

        <div className="row">
          <div className="col-6">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">℃</span>
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