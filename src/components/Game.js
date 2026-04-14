import { useOutletContext, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import Cards from "./Cards";
import Timer from "./Timer";
import BackLink from "./BackLink";
import cards from "../utils/cards";

import formatTime from "../utils/formatTime.js";

function Game() {
  const {
    playerName,
    setGameResult,
    openPopup,
    isGameFinished,
    setIsGameFinished,
    setRestartHandler,
  } = useOutletContext();
  const navigate = useNavigate();

  // Timer
  const startTimeRef = useRef(0);
  const intervalRef = useRef(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Cards
  const [gameCards, setGameCards] = useState([]);
  const [gameKey, setGameKey] = useState(0); // to reset Cards component

  // Start / Restart game
  const startGame = () => {
    // Reset game logical state
    setIsGameFinished(false);
    setGameResult(null);
    // 1. Shuffle cards
    const shuffled = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
        matched: false,
        status: "normal",
      }));
    setGameCards(shuffled);
    setGameKey((prev) => prev + 1);

    // 2. Restart timer
    clearInterval(intervalRef.current);
    startTimeRef.current = performance.now();
    setElapsedTime(0);

    intervalRef.current = setInterval(() => {
      setElapsedTime(performance.now() - startTimeRef.current);
    }, 1000);
  };

  useEffect(() => {
    setRestartHandler(() => startGame);
  }, [setRestartHandler]);

  // Start game on component mount
  useEffect(() => {
    startGame();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Finish game
  const finishGame = () => {
    if (isGameFinished) return;
    setIsGameFinished(true);
    clearInterval(intervalRef.current);
    const totalTime = performance.now() - startTimeRef.current;
    const formattedTime = formatTime(totalTime);
    setGameResult(formattedTime);
    openPopup();
  };

  useEffect(() => {
    if (!playerName) {
      navigate("/", { replace: true });
    }
  }, [playerName, navigate]);

  return (
    <div className="game">
      <Cards
        key={gameKey}
        cards={gameCards}
        setGameCards={setGameCards}
        onGameFinish={finishGame}
      />

      <div className="game__info-container">
        <div className="game__info">
          <div className="game__player-icon" />
          <p className="game__player-name">{playerName}</p>
          <Timer elapsedTime={elapsedTime} />
        </div>

        <button className="game__restart-btn" onClick={startGame}>
          Restart
        </button>
      </div>

      <BackLink href="/" linkText="Back to menu" />
    </div>
  );
}

export default Game;
