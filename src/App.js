import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { FormControlLabel, Grid, CssBaseline, Button, Container, Avatar, TextField, makeStyles } from '@material-ui/core';
import axios from 'axios'
import Card from './components/Card'

function App() {

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  
  const [city, setCity] = useState("");
  const [name,setName] = useState("");
  const [country,setCountry] = useState("");
  const [min_temp,setMinTemp] = useState("");
  const [max_temp,setMaxTemp] = useState("");
  const [humidity,setHumidity] = useState("");
  const [pressure,setPressure] = useState("");
  const [wind_speed,setWindSpeed] = useState("");
  const [wind_deg,setDeg] = useState("");
  const [haze,setHaze] = useState("");
  const [visibility, setVisibility] = useState("");
  // const APP_ID = "03c3de00";
  const API_KEY = "16e2f30095836e52950da48f8810c511";

  let result
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},India&APPID=16e2f30095836e52950da48f8810c511`;
  const getData = async () => {
    result = await axios.get(url);
  
      console.log(result.data);
      setMinTemp(result.data.main.temp_min);
      setMaxTemp(result.data.main.temp_max);
      setPressure(result.data.main.pressure);
      setHumidity(result.data.main.humidity);
      setHumidity(result.data.main.humidity);
      setVisibility(result.data.visibility);
      
      setName(result.data.name);
      setCountry(result.data.sys.country);
      console.log(result.data.weather);
      setHaze(result.data.weather[0].main);
      console.log(result.data.wind);
      setDeg(result.data.wind.deg);
      setWindSpeed(result.data.wind.speed);
  }

  const onSubmit = eve => {
    eve.preventDefault();
    getData();
  }

  const onChange = e => setCity(e.target.value);


  return (
    <div className="App">
      
      {/* <button onClick={getData}>Click</button> */}
      <Container component="main" maxWidth="xs">
          <h1>Weather </h1>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="city"
              label="Enter City Name"
              name="dish"
              autoComplete="city"
              autoFocus
              value={city}
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Search
          </Button>
          </form>
         { name?(<Card
            min_temp={min_temp}
            max_temp ={max_temp}
            humidity = {humidity}
            pressure = {pressure}
            wind_speed = {wind_speed}
            wind_deg = {wind_deg}
            country = {country}
            name = {name}
            haze ={haze}
            visibility = {visibility}
            
          
          
          />): ""
         }
          </Container>

    </div>
  );
}

export default App;
