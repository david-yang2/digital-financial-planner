import logo from './logo.svg';
import './App.css';
import Mortgage from './components/mortgage/mortgage.jsx'
import Income from "./components/income/income.jsx"

function App() {
  return (
    <div className="App">
        <Income />
        <Mortgage />
    </div>
  );
}

export default App;
