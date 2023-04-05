import { IoPlay, IoPause, IoStopwatchOutline, IoSync } from "react-icons/io5";

interface ActionsProps {
  running: boolean;
  startCounter: () => void;
  pauseCounter: () => void;
  clearCounter: () => void;
  addLap: () => void;
}

const Actions = ({
  running,
  startCounter,
  pauseCounter,
  clearCounter,
  addLap,
}: ActionsProps) => {
  return (
    <div className={`timer__actions ${running ? "running" : ""}`}>
      {/*  reset */}
      <button onClick={clearCounter}>
        <IoSync />
      </button>

      {/* start/pause */}
      {running ? (
        <button onClick={pauseCounter}>
          <IoPause />
        </button>
      ) : (
        <button onClick={startCounter}>
          <IoPlay />
        </button>
      )}

      {/* lap */}
      <button onClick={addLap}>
        <IoStopwatchOutline />
      </button>
    </div>
  );
};

export default Actions;
