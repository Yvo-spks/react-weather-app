import React from "react";
 
import "./Weather.css";

export default function Weather(){
    return(
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
                Dortmund
            </h1>
            <ul className="basic-descprition">
               <li>Wednesday 11:24</li> 
               <li>Cloudy</li>
            </ul>
            <h2>
            <img 
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
               alt="Cloudy"
               width="100"
                />
             </h2>
            
            <div className="row">
             <div className="col-6">
               <span className="temperature">8</span>
               <span className="unit">℃</span>
             </div>
             <div className="col-6">
                <ul className="description">
                  <li>Precipitation:10%</li>
                  <li>Humidity: 97%</li>
                  <li>Wind: 13km/h</li>  
                </ul>

             </div>
            </div>
        </div>
    );
}