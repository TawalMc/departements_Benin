import React,
{
  useState,
  useRef,
  useEffect
} from "react";
import { useHistory } from "react-router-dom";
import {
  com,
  index_choosed,
  dep_choosed_name
} from "../components/Treat_Dep_Com";

/** css files */
import "../css/GamePage.css";

function GamePage() {
  /**
   * State management
   */
  const [comToDisplay, setComToDisplay] = useState([]);
  const [depToDisplay, setDepToDisplay] = useState("");
  const [indexDep, setIndexDep] = useState();
  const [score, setScore] = useState(0);
  const [click, setClick] = useState(0);
  const [time, setTime] = useState(0);

  const userChoiceRef = useRef([]);

  const history = useHistory();

  useEffect(() => {
    setComToDisplay(com[click]);
    setDepToDisplay(dep_choosed_name[click]);
    setIndexDep(index_choosed[click]);
  }, [click]);

  /**
   * TODO
   * Mettre la condition d'arrêt du jeu et l'affichage de la page des meilleurs scores
   * sur la limite du temps (120s maxi)
   * Stocker dans localStorage les différents scores: meilleur score et score courant
   */
  useInterval(() => {
    setTime(time + 1);

    if(time >= 120){
      localStorage.setItem("currentScore", score);
      storeHighScore(score);
      history.push("/scorepage");
    }

  }, time > 120 ? null : 1000);

  const onChoosed = (e, value, theId) => {
    if (value === true) {
      setScore(prevScore => prevScore + 5);
    }
    setClick(click + 1);
  }

  return (
    <div id="GamePage">
      <div id="text-question">
        <p>
          Quelle commune du Bénin se trouve dans le département de:
        </p>
      </div>
      <div id="text-region">
        <div id="region">
          <p> {'==>'} {depToDisplay}</p>
        </div>
        <div id="current-score">
          <p>{`${score} pt${score > 1 ? "s" : ""}`}</p>
        </div>
      </div>
      <div id="text-choice">
        {comToDisplay.map((region, index) =>
          <BoxChoice key={index}
            ref={el => userChoiceRef.current[index] = el}
            theId={index}
            region={region}
            isAnswer={index === indexDep ? true : false}
            onChoosed={onChoosed}
          />
        )}
      </div>
      <div id="time-counter">
        <div id="slide">
          <div id="time-evolution"
            style={{ width: time >= 120 ? 0 : 100 * time / 120 + "%" }}></div>
        </div>
      </div>
    </div>
  );
}
export default GamePage;

const BoxChoice = React.forwardRef(({ region, isAnswer, onChoosed, theId }, userChoiceRef) => (
  <div className={`each-choice ${isAnswer}`}
    ref={userChoiceRef}
    onClick={(e) => onChoosed(e, isAnswer, theId)}>
    <p>
      {region}
    </p>
  </div>
))

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Configurer l’intervalle.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function storeHighScore(_score) {
  if(Number(localStorage.getItem("highScore")) < _score){
    localStorage.setItem("highScore", _score);
  }
}