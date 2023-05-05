import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [message, setMessage] = useState(null);
  let [date, setDate] = useState(null);

  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setMessage(city);
    setDate(formatDate(response.data.dt * 1000));
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "a10a99110c9b74eeb49e3f0430acbc06";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autofocus="on"
                outocomplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
      <div className="overview">
        <h1>{message}</h1>
        <ul>
          <li>
            Last updated: <span>{date}</span>
          </li>
          <li>{description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-temperature">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={icon}
              className="icon"
            />
            <span>
              <span className="temperature">{Math.round(temperature)}</span>
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
              Humidity: <span>{humidity}</span>%
            </li>
            <li>
              Wind: <span>{wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
