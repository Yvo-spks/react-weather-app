import React from "react";
 
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <form>
            <div className="row">
                <div className="col-7">
              <input type="search" placeholder="Enter a city.." 
              className="form-control"/> 
              </div>
              <div className="col-2">
              <input type="submit" value="search" 
              className="btn btn-primary"/>
              </div>
              <div className="col-2">
              <input type="submit" value="current" 
              className="btn btn-primary"/>
              </div>
             </div>
            </form>
            <h1>
                Dortmund
            </h1>
            <ul>
               <li>Wednesday 11:24</li> 
               <li>Cloudy</li>
            </ul>
            <h2>
            <img 
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
               alt="Cloudy"
                />
             </h2>
            <div className="row">
             <div className="col-6">
                8℃
             </div>
             <div className="col-6">
                <ul>
                  <li>Precipitation:10%</li>
                  <li>Humidity: 97%</li>
                  <li>Wind: 13km/h</li>  
                </ul>

             </div>
            </div>
        </div>
    );
}