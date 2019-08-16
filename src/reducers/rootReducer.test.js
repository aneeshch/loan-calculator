import reducer from './rootReducer';
import * as actionTypes from '../constants/constants';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            loanData: {},
            loanRecentData: [],
            loading: false,
        });
    });
    it('Return API success data', () => {
        expect(reducer({
            loanData: {},
            loanRecentData: [{ amount: 500, month: 6 }],
            loading: false,
        },
            {
                type: actionTypes.CALCULATE_LOAN_SUCCESS,
                loanRecentData: [{ amount: 500, month: 6 }, { amount: 2000, month: 20 }],
                loading: false,
                loanData: { principal: {amount: 2000}, numPayments: 20 },
            }
        )).toEqual({
            loanRecentData: [{ amount: 500, month: 6 }, { amount: 2000, month: 20 }],
            loading: false,
            loanData: { principal: {amount: 2000}, numPayments: 20 },
        });
    });
    it('Clear the recent views', () => {
        expect(reducer({
            loanData: {},
            loanRecentData: [{ amount: 500, month: 6 }],
            loading: false,
        },
            {
                type: actionTypes.CLEAR_RECENT_VIEWS_INIT,
                loanRecentData: [],
            }
        )).toEqual({
            loanData: {},
            loanRecentData: [],
            loading: false,
        });
    });
});