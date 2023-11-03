import Mortgage from "../mortgage/mortgage.jsx"
import Automobile from "../automobile/automobile.jsx"
import {useState} from "react";


const Calculator = () => {
    const [showMortgage, setShowMortgage] = useState(false);
    const [showAutomobile, setShowAutomobile] = useState(false);

    const toggleMortgageComponent = () => {
        setShowMortgage(!showMortgage);
        setShowAutomobile(false);
    }

    const toggleAutomobileComponent = () => {
        setShowAutomobile(!showAutomobile);
        setShowMortgage(false);
    }

    return (
        <div>
            <h1>this is the calculator component</h1>
            <button onClick={toggleMortgageComponent}> Mortgage </button>
            <button onClick={toggleAutomobileComponent}> Automobile </button>
            {showMortgage && <Mortgage />}
            {showAutomobile && <Automobile />}
        </div>
    )
}

export default Calculator;