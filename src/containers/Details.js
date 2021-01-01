import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import WeatherImage from "../components/WeatherImage";
import "../App.css";
import Music from "../components/Music";
import BackgroundMagic from "../components/Background";

// TODO
// - implement API
// - add props to details screen
// - style the details screen

function Details() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_WEATHER_KEY);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.log(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("name");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const {
    cloudiness,
    currentTemp,
    tempOnly,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    let cloudiness = "";
    let currentTemp = "";
    let tempOnly = "";
    let highTemp = "";
    let humidity = "";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";

    if (weatherData) {
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
      tempOnly = `${Math.round(weatherData.main.temp)}`;
      highTemp = `${Math.round(weatherData.main.temp_max)}°C`;
      humidity = `${weatherData.main.humidity}%`;
      lowTemp = `${Math.round(weatherData.main.temp_min)}°C`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} mph`;
    }

    return {
      cloudiness,
      currentTemp,
      tempOnly,
      highTemp,
      humidity,
      lowTemp,
      weatherType,
      windSpeed,
    };
  }, [weatherData]);

  const { backgroundText } = useMemo(() => {
    let backgroundText = "";

    if (tempOnly < 10) {
      backgroundText = "bg-gradient-to-r from-green-400 to-blue-500";
    } else if (tempOnly < 20) {
      backgroundText =
        "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500";
    } else if (tempOnly > 20) {
      backgroundText = "from-blue-600 to-purple-500 bg-gradient-to-r";
    }

    return backgroundText;
  });

  return (
    // Container
    <div
      className={
        "flex flex-col items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 " +
        { backgroundText }
      }
    >
      <div className="p-8 text-2xl font-bold bg-color-gray-900 text-white">
        Weather in {city}
      </div>

      <div className="flex flex-col p-8 m-4 border-2 rounded-md items-center">
        <WeatherImage weatherType={weatherType} className="text-xl" />
        <div>{weatherType}</div>
        <div>Current Temperature : {currentTemp}</div>
      </div>

      <div>High Temperature : {highTemp}</div>
      <div>Cloudiness : {cloudiness}</div>
      <div>Low Temperature : {lowTemp}</div>
      <div>Humidity : {humidity}</div>
      <div>Wind Speed : {windSpeed}</div>
      <div className="absolute right-0 bottom-0">
        <Music temp={tempOnly}></Music>
      </div>
    </div>
  );
}

export default Details;
