import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackLink from "./BackLink";
import { AppContext } from "../types/app-context";

type GetPlayerNameContext = Pick<AppContext, "setPlayerName">;

function GetPlayerName() {
  const navigate = useNavigate();
  const { setPlayerName } = useOutletContext<GetPlayerNameContext>();

  const [localPlayerName, setLocalPlayerName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const playerNameError =
    isTouched && localPlayerName.length === 0 ? "Name is required" : "";
  const isFormValid = localPlayerName.trim().length > 0;

  function handlePlayerNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isTouched) {
      setIsTouched(true);
    }
    setLocalPlayerName(e.currentTarget.value);
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
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
          name="player-name"
        />
        <span className="get-player-name__error">{playerNameError}</span>
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
