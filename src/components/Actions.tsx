import { IoPlay, IoPause, IoStopwatchOutline, IoSync } from "react-icons/io5";

const Actions = () => {
  return (
    <div className="timer__actions">
      <button>
        <IoSync />
      </button>
      <button>
        <IoPlay />
        {/* <IoPause /> */}
      </button>
      <button>
        <IoStopwatchOutline />
      </button>
    </div>
  );
};

export default Actions;
