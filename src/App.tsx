import Actions from "./components/Actions";
import Counter from "./components/Counter";
import LapsList from "./components/LapsList";

function App() {
  return (
    <div className="timer">
      <Counter />
      <LapsList />
      <Actions />
    </div>
  );
}

export default App;
