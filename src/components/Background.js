import React from "react";

function BackgroundMagic({ temp }) {
  if (temp < 10) {
    return "bg-gradient-to-r from-green-400 to-blue-500";
  } else if (temp < 20) {
    return "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500";
  } else {
    return "from-blue-600 to-purple-500 bg-gradient-to-r";
  }
}
export default BackgroundMagic;
