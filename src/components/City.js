import React from "react";
import { useHistory } from "react-router-dom";
import "./city.css";

// props -> cityName ,temp, color
function City({ cityName, temp, color }) {
  const history = useHistory();

  function handleClick() {
    history.push("/city?name=" + cityName);
  }

  return (
    <button
      className={
        "box-content group p-20 m-20 h-200 rounded-xl justify-between items-center   " +
        color +
        " bg-cover"
      }
      id="homeCity"
      onClick={handleClick}
    >
      <div className="text-2xl text-white bg-gray-900 w-31 hover:bg-blue-900">
        {cityName}
      </div>
      <div className="text-5xl group-hover:text-gray-500 hover:bg-gray-100">
        {temp}
      </div>
    </button>
  );
}

export default City;
