import {
  millisecondsToMinutesToStr,
  millisecondsToSecondsToStr,
  millisecondsToStr,
} from "../util/util";

interface CounterProps {
  counter: number;
}

const Counter = ({ counter }: CounterProps) => {
  return (
    <div className="timer__counter">
      <span>
        {millisecondsToMinutesToStr(counter)}:
        {millisecondsToSecondsToStr(counter)}
      </span>
      <small>{millisecondsToStr(counter)}</small>
    </div>
  );
};

export default Counter;
