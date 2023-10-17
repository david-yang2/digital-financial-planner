import React, {useState} from 'react'
import CalculateFederalIncomeTax from './CalculateFederalIncomeTax'
import CalculateStateIncomeTax from './CalculateStateIncomeTax'

const Income = () => {
    const [income, setIncome] = useState(0)
    const [totalFedTax, setTotalFedTax] = useState(0);
    const [totalStateTax, setTotalStateTax] = useState(0);

    return (
        <div>
            <input
                type="text"
                placeholder="Please enter your income"
                onChange={(event) => setIncome(event.target.value)}
            />
            <div>Your income is: ${income}</div>
            {/*Federal Tax Component */}
            <CalculateFederalIncomeTax income={income} 
                                        totalFedTax = {totalFedTax}
                                        setTotalFedTax = {setTotalFedTax} />
            {/*State Tax Component */}
            <CalculateStateIncomeTax income={income} 
                                      totalStateTax = {totalStateTax}
                                      setTotalStateTax = {setTotalStateTax} />
            <div>
                Your after-tax income is {income - totalFedTax - totalStateTax}.
            </div>
        </div>
    )
}

export default Income;