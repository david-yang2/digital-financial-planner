import React, {useState} from 'react'
import CalculateFederalIncomeTax from './CalculateFederalIncomeTax'
import CalculateStateIncomeTax from './CalculateStateIncomeTax'

const Income = () => {
    const [income, setIncome] = useState(0)

    return (
        <div>
            <input
                type="text"
                placeholder="Please enter your income"
                onChange={(event) => setIncome(event.target.value)}
            />
            <div>Your income is: ${income}</div>
            {/*Federal Tax Component */}
            <CalculateFederalIncomeTax income={income} />
            {/*State Tax Component */}
            <CalculateStateIncomeTax income={income} />
        </div>
    )
}

export default Income;