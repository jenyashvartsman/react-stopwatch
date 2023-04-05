import { useState } from "react";
import Actions from "./components/Actions";
import Counter from "./components/Counter";
import LapsList from "./components/LapsList";

function App() {
  const [running, setRunning] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counterInterval, setCounterInerval] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);

  const startCounter = (): void => {
    setRunning(true);

    // update counter
    const interval = setInterval(() => {
      setCounter((prev) => (prev += 10));
    }, 10);
    setCounterInerval(interval);
  };

  const pauesCounter = (): void => {
    setRunning(false);
    clearInterval(counterInterval);
  };

  const clearCounter = (): void => {
    pauesCounter();
    setCounter(0);
    setLaps([]);
  };

  const addLap = (): void => {
    setLaps((prev) => [...prev, counter]);
  };

  return (
    <div className="timer">
      <Counter counter={counter} />
      {laps.length ? <LapsList laps={laps} /> : null}
      <Actions
        running={running}
        startCounter={startCounter}
        pauseCounter={pauesCounter}
        clearCounter={clearCounter}
        addLap={addLap}
      />
    </div>
  );
}

export default App;
