import formatTime from "../utils/formatTime";

interface TimerProps {
  elapsedTime: number;
}

function Timer({ elapsedTime }: TimerProps) {
  return (
    <div className="timer">
      <div className="timer__icon" />
      <p className="timer__time">{formatTime(elapsedTime)}</p>
    </div>
  );
}

export default Timer;
