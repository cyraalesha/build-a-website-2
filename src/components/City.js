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
        "box-content group p-20 m-20 h-200 rounded-xl justify-between items-center  animate-bounce " +
        color +
        " bg-cover"
      }
      id="homeCity"
      onClick={handleClick}
    >
      <div className="text-2xl text-white bg-gray-900 w-31 group-hover:text-gray-900">
        {cityName}
      </div>
      <div className="text-5xl group-hover:text-gray-500">{temp}</div>
    </button>
  );
}

export default City;
