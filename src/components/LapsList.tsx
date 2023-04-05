import { millisecondsToTimeStr } from "../util/util";

interface LapsListProps {
  laps: number[];
}

const LapsList = ({ laps }: LapsListProps) => {
  return (
    <ul className="timer__laps-list">
      {laps.map((lap, index) => (
        <li key={lap}>
          <span>#{index + 1}</span>
          <span>
            {millisecondsToTimeStr(index === 0 ? lap : lap - laps[index - 1])}
          </span>
          <span>{millisecondsToTimeStr(lap)}</span>
        </li>
      ))}
    </ul>
  );
};

export default LapsList;
