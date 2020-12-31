import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import City from "../components/City";

function Home() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta");

  const [cities, setCities] = useState([
    {
      name: "London",
      currentTemp: "0",
      color: "bg-london-background",
    },
    {
      name: "Jakarta",
      currentTemp: "0",
      color: "bg-jakarta-background",
    },
    {
      name: "Sydney",
      currentTemp: "0",
      color: "bg-sydney-background",
    },
  ]);

  useEffect(() => {
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
        console.warn(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const { currentTemp } = useMemo(() => {
    let currentTemp = "";
    if (weatherData) {
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
    }
    return {
      currentTemp,
    };
  }, [weatherData]);

  return (
    // Container
    <div className="flex flex-col items-center h-screen bg-main-background">
      {/*cities.map((item, index) => (
        <City cityName={item.name} temp={item.currentTemp} color={item.color} />
      ))*/}
      <div className="flex flex-row mt-20 items-center border-black border-opacity-5">
        {cities.map((item) => (
          <City
            cityName={item.name}
            temp={item.currentTemp}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
