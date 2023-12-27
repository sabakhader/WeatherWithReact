import React, { useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = "37ab3fa5b1b8ab2a3bcb8aa5d9c2bb95";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const searchloc = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  }
  



  return (
    <div className="app">
      <div className="search">
      <input type="text" placeholder="Enter location" value={location}
      onChange={event => setLocation(event.target.value)} onKeyUp={searchloc}></input>
     

      </div>
      
      <div className="container">
        <div className="top">
          <div className="location"><p>{data.name}</p></div>
          <div className="temp">
            {data.main?<h1>{data.main.temp.toFixed()}  ْF </h1>: null}
            </div>
          <div className="description">{data.weather?<p>{data.weather[0].main}</p>:null}</div>
        </div>
        <div className="bottom">
          <div className="feels"> { data.main ?<p className="bold">{data.main.feels_like.toFixed()} ْF</p> :null}
          <p>Feels Like</p></div>
          <div className="humidity"> { data.main?<p className="bold">{data.main.humidity}%</p>:null}
          <p>Humidity</p></div>
          <div className="winds"> {data.wind?<p className="bold">{data.wind.speed.toFixed()} MPH</p>:null}
          <p>Winds Speed</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;

