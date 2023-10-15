import React, {useState} from 'react'
import CalculateFederalIncomeTax from './CalculateFederalIncomeTax'

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
        </div>
    )
}

export default Income;