import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
          <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <img
                src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
                alt={props.data.icon}
                className="icon"
              />
              <span>
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>
                </span>
              </span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Humidity: <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span>{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
