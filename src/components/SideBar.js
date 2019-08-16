import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import _isEmpty from 'lodash/isEmpty';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    marginRight: theme.spacing(1),
    padding: 5,
    float: 'right',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function SideBar(props) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Recent Views
        <Button variant="outlined" color="secondary" className={classes.button} onClick={props.handleClearViews}>
          Clear
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      </Typography>
      <List>
        {_isEmpty(props.recentData) && <ListItem>No Recent Views !</ListItem>}
        {props.recentData && Array.isArray(props.recentData) && props.recentData.map((eachData, index) => (
          <React.Fragment key={index}>
            <ListItem button onClick={() => props.handleRecentClick(index)}>
              <ListItemText>{`Amont: $ ${eachData.amount} - Duration (Months): ${eachData.month}`} </ListItemText>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
