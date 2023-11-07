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
        <div className="calculator">
            <h4>Please select a calculator</h4>
            <div>
                <button onClick={toggleMortgageComponent}> Mortgage </button>
                <button onClick={toggleAutomobileComponent}> Automobile </button>
            </div>
            {showMortgage && <Mortgage />}
            {showAutomobile && <Automobile />}
        </div>
    )
}

export default Calculator;