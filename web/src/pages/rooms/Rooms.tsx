import React from 'react'
import Appbar from '../../organisms/appbar/Appbar';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);
interface Rooms{
  state: boolean;
}
export default function Rooms(room:  Rooms) {
  const classes = useStyles();
  const {state} = room;
  return (
    <div className={classes.root} style={{width: '70%', margin: '30px auto'}}>
      <Appbar state={state}/> 
      <Paper elevation={0}/>
      <Paper />
      <Paper elevation={3} />
    </div>
  );
}