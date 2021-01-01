import React, { useState, useEffect } from "react";
import axios from "axios";

import City from "../components/City";

function Home() {
  const [cities, setCities] = useState([
    {
      name: "London",
      currentTemp: "0",
      weatherType: "",
      color: "bg-london-background",
    },
    {
      name: "Jakarta",
      currentTemp: "0",
      weatherType: "",
      color: "bg-jakarta-background",
    },
    {
      name: "Sydney",
      currentTemp: "0",
      weatherType: "",
      color: "bg-sydney-background",
    },
  ]);

  useEffect(() => {
    updateAllWeatherData();
  }, []);

  // Fetch the weather data for 1 city
  async function fetchWeatherData(cityName) {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        return weather;
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.warn(error);
      });

    return res;
  }

  // update the list data
  async function updateAllWeatherData(params) {
    cities.forEach(function (citiesItems, index) {
      let weatherData = {};
      let newCities = [...cities];

      fetchWeatherData(citiesItems.name).then((res) => {
        weatherData = res;

        newCities[index].currentTemp = `${Math.round(weatherData.main.temp)}°C`;
        newCities[index].weatherType = weatherData.weather[0].main;
        setCities(newCities);
      });
    });
  }

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
