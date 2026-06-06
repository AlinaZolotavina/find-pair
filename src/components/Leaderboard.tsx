import BackLink from "./BackLink";
import formatTime from "../utils/formatTime";
import type { Leader } from "../types/leader";

interface LeaderboardProps {
  leaders: Leader[];
}

function Leaderboard({ leaders }: LeaderboardProps) {
  return (
    <div className="leaderboard">
      <div className="leaderboard__icon" />
      <h2 className="leaderboard__title">LEADERBOARD</h2>

      <div className="leaderboard__list-wrapper">
        <ul className="leaderboard__list">
          {leaders.map((leader, index) => (
            <li key={leader.id} className="leaderboard__element">
              <div
                className={`leaderboard__element-icon ${
                  index === 0
                    ? "leaderboard__element-icon_place_first"
                    : index === 1
                      ? "leaderboard__element-icon_place_second"
                      : index === 2
                        ? "leaderboard__element-icon_place_third"
                        : ""
                }`}
              >
                {index + 1}
              </div>
              <p className="leaderboard__element-name">{leader.name}</p>
              <p className="leaderboard__element-time">
                {formatTime(leader.time)}
              </p>
            </li>
          ))}
        </ul>
        <div className="leaderboard__overlay">Feature in progress</div>
      </div>
      <BackLink href="/" linkText="Back to menu" />
    </div>
  );
}

export default Leaderboard;
