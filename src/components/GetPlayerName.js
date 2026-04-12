import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackLink from "./BackLink";

function GetPlayerName() {
  const navigate = useNavigate();
  const { setPlayerName } = useOutletContext();

  const [localPlayerName, setLocalPlayerName] = useState("");
  const [playerNamerError, setPlayerNameError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handlePlayerNameChange(e) {
    if (e.target.value.length === 0) {
      setPlayerNameError("Name is required");
    } else {
      setPlayerNameError("");
    }
    setLocalPlayerName(e.target.value);
  }

  useEffect(() => {
    if (localPlayerName && !playerNamerError) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [localPlayerName, playerNamerError]);

  function handleSubmit(e) {
    console.log("Submit player name:", localPlayerName);
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);
    setPlayerName(localPlayerName.trim());
    navigate("/new-game", { replace: true });
  }

  return (
    <div className="get-player-name">
      <p className="get-player-name__title">What's your name?</p>
      <div className="get-player-name__icon" />
      <form className="get-player-name__form" onSubmit={handleSubmit}>
        <input
          className="get-player-name__input"
          placeholder="Enter your name or nickname"
          type="text"
          onChange={handlePlayerNameChange}
          value={localPlayerName}
          required
          disabled={isSubmitting}
        />
        <span className="get-player-name__error">{playerNamerError}</span>
        <button
          className={`get-player-name__submit-btn ${isFormValid ? "" : "get-player-name__submit-btn_disabled"}`}
          type="submit"
          disabled={!isFormValid || isSubmitting}
        >
          Play
        </button>
      </form>
      <BackLink href="/" linkText="Back to menu" />
    </div>
  );
}

export default GetPlayerName;
