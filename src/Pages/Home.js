import React from "react";
import "../css/Home.css";

/**
 * TODO
 * use media queries to adapt displaying of web app to mobile device browser
 */

function Home() {
  return (
    <div id="Home">
      <a href="/gamepage">
        <div id="circle-play">
          <div id="text-play">
            <p>JOUER</p>
          </div>
        </div>
      </a>
      <p>
        Choisissez la bonne réponse!
      </p>
    </div>
  );
}

export default Home;