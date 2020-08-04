import React, {useState, useEffect} from "react";
import "../css/ScorePage.css";

function ScorePage() {

  const [currentScore, setCurrentScore] = useState(50);
  const [highScore, setHighScore] = useState(100);

  useEffect(() =>{
    setCurrentScore(Number(localStorage.getItem("currentScore")));
    setHighScore(Number(localStorage.getItem("highScore")));
  }, [])

  return (
    <div id="ScorePage">
      <div className="score-section go-to-home">
        <a className="score-text" href="/">Go to Home</a>
        <a className="score" href="/">==> </a>
      </div>
      <div className="score-section">
        <p className="score-text">Votre score</p>
        <p className="score">{`${currentScore} pt${currentScore > 1 ? "s" : ""}`}</p>
      </div>
      <div className="score-section">
        <p className="score-text">Meilleur score</p>
        <p className="score">{`${highScore} pt${highScore > 1 ? "s" : ""}`}</p>
      </div>
      <div className="score-section go-to-home about">
        <a className="score-text" href="/">Développée par <br/> Version: 0.1 </a>
        <a className="score" href="/">Tawal</a>
      </div>
    </div>
  );
}

export default ScorePage;