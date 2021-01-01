import React from "react";

function Music({ temp }) {
  if (temp < 10) {
    return (
      <iframe
        src="https://open.spotify.com/embed/playlist/1ab6amkU7F4LixYdQGWBDc"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    );
  } else if (temp < 20) {
    return (
      <iframe
        src="https://open.spotify.com/embed/playlist/5rNfVAmejiYtg121ere1oQ"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    );
  } else {
    return (
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1gRalH1mWrP"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    );
  }
}
export default Music;
