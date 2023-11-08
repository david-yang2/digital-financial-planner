import './App.css';
import Calculator from "./components/calculator/calculator.jsx"
import Income from "./components/income/income.jsx"

function App() {
  
  return (
    <div className="App">
        <h3> Can I afford it? </h3>
        <div>
          <Income />
          <Calculator />
        </div>
    </div>
  );
}

export default App;
