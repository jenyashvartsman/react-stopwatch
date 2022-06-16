import './App.css';
import BtnReset from './components/BtnReset';
import BtnStart from './components/BtnStart';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div>
      <Stopwatch />
      <BtnStart />
      <BtnReset />
    </div>
  );
}

export default App;
