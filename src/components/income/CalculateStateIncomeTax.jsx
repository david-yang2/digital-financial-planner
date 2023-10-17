
const CalculateStateIncomeTax = (props) => {
    let income = props.income;
    let totalStateTax = props.totalStateTax
    let setTotalStateTax = props.setTotalStateTax;
    // console.log(props);

    const taxBrackets = [
        {lowerBound: 0, upperBound: 10099, taxRate: 0.01, additionalPayment: 0},
        {lowerBound: 10100, upperBound: 23942, taxRate: 0.02, additionalPayment: 100.99},
        {lowerBound: 23943, upperBound: 37788, taxRate: 0.04, additionalPayment: 377.85},
        {lowerBound: 37789, upperBound: 52455, taxRate: 0.06, additionalPayment: 931.69},
        {lowerBound: 52456, upperBound: 66295, taxRate: 0.08, additionalPayment: 1811.71},
        {lowerBound: 66296, upperBound: 338639, taxRate: 0.093, additionalPayment: 2918.91},
        {lowerBound: 338640, upperBound: 406364, taxRate: 0.103, additionalPayment: 28246.9},
        {lowerBound: 406365, upperBound: 677275, taxRate: 0.113, additionalPayment: 35222.58},
        {lowerBound: 677276, upperBound: Infinity, taxRate: 0.123, additionalPayment: 65835.52},
    ]

    let stateTax = 0;

    for (let bracket of taxBrackets) {
        if (income > bracket.upperBound) {
            stateTax += (bracket.upperBound - bracket.lowerBound) * bracket.taxRate + bracket.additionalPayment
        } else {
            stateTax += (income - bracket.lowerBound) * bracket.taxRate + bracket.additionalPayment
            break;
        }
    }
    setTotalStateTax(stateTax.toFixed(2))
    
    return (
        <div>
            Your total state income tax is: ${totalStateTax}
        </div>
    );
}

export default CalculateStateIncomeTax;
