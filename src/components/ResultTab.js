import React from 'react';
import _get from 'lodash/get';

export default function ResultTab(props) {
    return (
        <ul>
            <li>Principal Amount : {_get(props, 'loanData.principal.amount')} USD</li>
            <li>Interest : {_get(props, 'loanData.interestRate')} %</li>
            <li>Installment : $ {_get(props, 'loanData.monthlyPayment.amount')} per Month </li>
            <li>Number of payments : {_get(props, 'loanData.numPayments')} </li>
        </ul>
    )
}