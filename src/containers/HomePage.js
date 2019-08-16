import React from 'react';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '../components/InputSlider';
import ResultTab from '../components/ResultTab';
import Loader from '../components/Loader';
import SideBar from '../components/SideBar';
import { loanCalculator, clearRecentViews } from '../actions/index';

export class HomePage extends React.Component {
    state = {
        month: 6,
        amount: 500,
        monthMinValue: 6,
        monthMaxValue: 24,
        amountMinValue: 500,
        amountMaxValue: 5000,
    }

    /* Fetch results from API */
    fetchDataFromApi = () => {
        const { amount, month } = this.state;
        if (amount && month) {
            this.props.calculateLoan(`?amount=${amount}&numMonths=${month}`);
        }
    }

    /* Initial Call */
    componentDidMount() {
        this.fetchDataFromApi();
    }

    /* Validate extreme values and alert user*/
    handleValidation = (minValue, maxValue, name, currentValue) => {
        if (currentValue < minValue) {
            alert(`Minimum Value is ${minValue}`);
            this.setState({ [name]: minValue });
        } else if (currentValue > maxValue) {
            alert(`Maximum Value is ${maxValue}`);
            this.setState({ [name]: maxValue });
        }
        this.fetchDataFromApi();
    }
    
    /* API call from slider */
    blurHandlerSlider = () => {
        this.fetchDataFromApi();
    }

    /* Validate input */
    blurHandlerInput = event => {
        if (event.target.name === 'amount') {
            this.handleValidation(this.state.amountMinValue, this.state.amountMaxValue, 'amount', this.state.amount);
        } else if (event.target.name === 'month') {
            this.handleValidation(this.state.monthMinValue, this.state.monthMaxValue, 'month', this.state.month);
        }
    }

    /* Update input value */
    handleInputChange = event => {
        this.setState({ [event.target.name]: Number(event.target.value) });
    }

    /* Update slider value */
    handleSliderChange = name => (event, newValue) => {
        this.setState({ [name]: newValue });
    }

    /* Fetch one from the recent data */
    handleRecentClick = index => {
        const { month, amount } = this.props.loanRecentData[index];
        this.props.calculateLoan(`?amount=${amount}&numMonths=${month}`);
        this.setState({
            month,
            amount,
        });
    }

    /* Clear recent views */
    handleClearViews = () => {
        this.props.clearRecentViews();
    }

    render() {
        if (this.props.loading) {
            return (<Loader />);
        }
        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <div className='main-div'>
                        <div className='content-title'>
                            <Typography variant="h5">
                                Enter Loan Details
                    </Typography>
                        </div>
                        <Slider sliderName='Principal Amount ($)'
                            minValue={this.state.amountMinValue}
                            maxValue={this.state.amountMaxValue}
                            name='amount'
                            value={this.state.amount}
                            handleSliderChange={this.handleSliderChange}
                            handleInputChange={this.handleInputChange}
                            handleBlur={this.blurHandlerInput}
                            onChangeCommitted={this.blurHandlerSlider} />
                        <Slider sliderName='Duration (Months)'
                            minValue={this.state.monthMinValue}
                            maxValue={this.state.monthMaxValue}
                            name='month'
                            value={this.state.month}
                            handleSliderChange={this.handleSliderChange}
                            handleInputChange={this.handleInputChange}
                            handleBlur={this.blurHandlerInput}
                            onChangeCommitted={this.blurHandlerSlider} />
                    </div>
                    {!_isEmpty(this.props.loanData) && <div className='result-div'>
                        <div className='content-title'>
                            <Typography variant="h5">
                                Loan Details
                            </Typography>
                        </div>
                        <ResultTab loanData={this.props.loanData} />
                    </div>
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <div className="app-sidebar">
                        <SideBar recentData={this.props.loanRecentData}
                            handleRecentClick={this.handleRecentClick}
                            handleClearViews={this.handleClearViews} />
                    </div>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    const { loanData, loanRecentData, loading } = state;
    return {
        loanData,
        loanRecentData,
        loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        calculateLoan: (params) => dispatch(loanCalculator(params)),
        clearRecentViews: () => dispatch(clearRecentViews()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
