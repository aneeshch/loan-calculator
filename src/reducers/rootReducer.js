import * as actionTypes from '../constants/constants';
import { updateObject, reduceObject, uniqueArray } from '../utils/helper';

const initialState = {
    loanData: {},
    loanRecentData: [],
    loading: false,
};

/* Api call start*/

const loanCalculatorStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const loanCalculatorSuccess = ( state, action ) => {
    let loanRecentData = state.loanRecentData.concat(reduceObject(action.loanData));
    const loanRecentDataUnique = uniqueArray(loanRecentData); 
    return updateObject( state, {
        loading: false,
        loanData: action.loanData,
        loanRecentData: loanRecentDataUnique,
    } );
};

const loanCalculatorFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

/* Api call end*/

/* clear Recent views */

const clearRecentViews = ( state, action ) => {
    return updateObject( state, { loanRecentData: [] } );
};

/* clear Recent views */

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CALCULATE_LOAN_START: return loanCalculatorStart( state, action );
        case actionTypes.CALCULATE_LOAN_SUCCESS: return loanCalculatorSuccess( state, action );
        case actionTypes.CALCULATE_LOAN_FAIL: return loanCalculatorFail( state, action );
        case actionTypes.CLEAR_RECENT_VIEWS_INIT: return clearRecentViews( state, action);
        default: return state;
    }
};

export default reducer;