import { Outlet } from "react-router-dom";
import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [gameResult, setGameResult] = useState<string | null>(null);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [restartHandler, setRestartHandler] = useState<(() => void) | null>(
    null,
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  function restartGame() {
    restartHandler?.();
    setIsPopupOpen(false);
  }

  return (
    <>
      <Outlet
        context={{
          playerName,
          setPlayerName,
          gameResult,
          setGameResult,
          openPopup,
          isGameFinished,
          setIsGameFinished,
          setRestartHandler,
        }}
      />
      <Popup
        gameResult={gameResult}
        isOpen={isPopupOpen}
        onClose={closePopup}
        onPlayAgain={restartGame}
      />
    </>
  );
}

export default App;
