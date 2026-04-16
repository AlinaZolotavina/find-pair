import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import GameMenu from "./components/GameMenu";
import GetPlayerName from "./components/GetPlayerName";
import Leaderboard from "./components/Leaderboard";
import Game from "./components/Game";
import PageNotFound from "./components/PageNotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <GameMenu /> },
        { path: "get-player-name", element: <GetPlayerName /> },
        { path: "leaderboard", element: <Leaderboard /> },
        { path: "new-game", element: <Game /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ],
  {
    basename: process.env.NODE_ENV === "production" ? "/find-pair" : undefined,
  },
);
console.log(
  "Router created with basename:",
  process.env.NODE_ENV === "production" ? "/find-pair" : "undefined",
);
export default router;
