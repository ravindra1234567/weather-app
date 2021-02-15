import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({ min_temp,max_temp,humidity,pressure,wind_speed,wind_deg,country,name,haze,visibility}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h2> {haze}</h2>
        </Typography>
        <Typography variant="h5" component="h2">
          {name},{country}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <h3>Min Temperature : {min_temp} C ({haze})</h3>
          <h3>Max Temperature :  {max_temp} C ({haze})</h3>
          <h3>Wind Speed :  {wind_speed} Km/h</h3>
          <h3>Humidity :  {humidity} %</h3>
          <h3>Pressure :  {pressure} </h3>
          <h3>Visibility :  {visibility} ml </h3>
          
        </Typography>
      </CardContent>
     
    </Card>
  );
}
