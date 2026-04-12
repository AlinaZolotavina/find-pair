import MenuOption from "./MenuOption";

function GameMenu() {
  return (
    <div className="find-pair">
      <div className="find-pair__logo" />
      <div className="find-pair__menu">
        <MenuOption buttonText="New game" page="/get-player-name" />
        <MenuOption buttonText="Leaderboard" page="/leaderboard" />
      </div>
    </div>
  );
}

export default GameMenu;
