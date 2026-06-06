import { Dispatch, SetStateAction } from "react";

export type AppContext = {
  playerName: string;
  setPlayerName: Dispatch<SetStateAction<string>>;
  gameResult: string | null;
  setGameResult: Dispatch<SetStateAction<string | null>>;
  openPopup: () => void;
  isGameFinished: boolean;
  setIsGameFinished: Dispatch<SetStateAction<boolean>>;
  setRestartHandler: Dispatch<SetStateAction<(() => void) | null>>;
};
