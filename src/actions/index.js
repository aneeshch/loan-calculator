import * as actionTypes from '../constants/constants';
import axios from 'axios';

/* Api call start*/

export const loanCalculatorSuccess = ( loanData ) => {
    return {
        type: actionTypes.CALCULATE_LOAN_SUCCESS,
        loanData,
    };
};

export const loanCalculatorFail = ( error ) => {
    return {
        type: actionTypes.CALCULATE_LOAN_FAIL,
        error: error
    };
}

export const loanCalculatorStart = () => {
    return {
        type: actionTypes.CALCULATE_LOAN_START
    };
};

export const loanCalculator = ( params ) => {
    return dispatch => {
        dispatch( loanCalculatorStart() );
        axios.get( actionTypes.CALCULATE_LOAN_URL + params )
            .then( response => {
                dispatch( loanCalculatorSuccess( response.data ) );
            } )
            .catch( error => {
                dispatch( loanCalculatorFail( error ) );
            } );
    };
};

/* Api call end*/

/* clear Recent views */

export const clearRecentViewsInit = () => {
    return {
        type: actionTypes.CLEAR_RECENT_VIEWS_INIT
    };
};

export const clearRecentViews = () => {
    return dispatch => {
        dispatch( clearRecentViewsInit() );
    };
};

/* clear Recent views */
