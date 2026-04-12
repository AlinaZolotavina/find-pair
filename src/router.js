import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import GameMenu from "./components/GameMenu";
import GetPlayerName from "./components/GetPlayerName";
import Leaderboard from "./components/Leaderboard";
import Game from "./components/Game";
import PageNotFound from "./components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout
    children: [
      {
        index: true,
        element: <GameMenu />,
      },
      {
        path: "get-player-name",
        element: <GetPlayerName />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "new-game",
        element: <Game />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
