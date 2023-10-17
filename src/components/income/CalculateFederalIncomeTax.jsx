import React from 'react';


const CalculateFederalIncomeTax = (props) => {

    let income = props.income;
    let totalFedTax = props.totalFedTax;
    let setTotalFedTax = props.setTotalFedTax;

    const taxBrackets = [
        {lowerBound: 0, upperBound: 10599, taxRate: 0.10},
        {lowerBound: 11000, upperBound: 44724, taxRate: 0.12},
        {lowerBound: 44725, upperBound: 95374, taxRate: 0.22},
        {lowerBound: 95375, upperBound: 182099, taxRate: 0.24},
        {lowerBound: 182100, upperBound: 231249, taxRate: 0.32},
        {lowerBound: 231250, upperBound: 578124, taxRate: 0.35},
        {lowerBound: 578125, upperBound: Infinity, taxRate: 0.37},
    ]

    let fedTax = 0;
    let marginalTaxRate;
    let effectiveTaxRate = 0;

    for (let bracket of taxBrackets) {
        if ( income > bracket.upperBound ){

            let taxableIncome = bracket.upperBound - bracket.lowerBound;
            fedTax += taxableIncome * bracket.taxRate;

        } else {

            fedTax += (income - bracket.lowerBound) * bracket.taxRate
            marginalTaxRate = bracket.taxRate
            break;
        }


    }

    setTotalFedTax(fedTax.toFixed(2));

    effectiveTaxRate = (totalFedTax / props.income).toFixed(2);
    isNaN(effectiveTaxRate) ? effectiveTaxRate = 0 : effectiveTaxRate = effectiveTaxRate;

    return (
        <div>
            Your total federal income tax is: ${totalFedTax}
        </div>
    )
}

export default CalculateFederalIncomeTax;