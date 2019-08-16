import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    padding: 10,
    paddingTop: 20,
    margin: 10,
    marginTop: 20,
  },
  rightIcon: {
    float: 'right',
    '&:hover': {
      color: '#3f51b5',
    },
  },
});

export default function InputSlider(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Typography id="input-slider" gutterBottom>
            {props.sliderName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Slider
            value={typeof props.value === 'number' ? props.value : props.minValue}
            onChange={props.handleSliderChange(props.name)}
            onChangeCommitted={props.onChangeCommitted}
            aria-labelledby="input-slider"
            min={props.minValue}
            max={props.maxValue}
            // valueLabelDisplay="on"
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Input
            className={classes.input}
            value={props.value}
            name={props.name}
            margin="dense"
            onChange={props.handleInputChange}
            onBlur={props.handleBlur}
            inputProps={{
              step: 1,
              min: props.minValue,
              max: props.maxValue,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />

           <Tooltip title={`Minimum value is ${props.minValue} and maximum value is ${props.maxValue}`}>
           <InfoIcon className={classes.rightIcon}/>
           </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}
