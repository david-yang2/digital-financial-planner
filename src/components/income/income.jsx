import React, {useState} from 'react'

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
        </div>
    )
}

export default Income;