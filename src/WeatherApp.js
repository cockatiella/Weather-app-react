import './WeatherApp.css';
import axios from 'axios';
import React, { useState } from 'react';

export default function WeatherApp() {

    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0125638857701773acf21c746405266f`

    const searchCity = (city) => {
        if (city.key === 'Enter') {
            axios.get(url).then(res => {
                setWeatherData(res.data)
                console.log(res.data)
            })
        }
    }
    return (
        <div className={'container ' + (weatherData.main ? `${weatherData.weather[0].main}` : null) }>
         
            <div className='text-container'>
            <h1>☁️Weather App☀️</h1>
            <h4>Enter city and press enter</h4>
                <input
                    onKeyPress={searchCity}
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    type="text"
                    placeholder="Enter city..." />
                <p>{weatherData.name}</p>
                <p>{weatherData.main ? <span> {Math.floor(weatherData.main.temp - 273.15)}°C</span> : null}</p>
                <p>{weatherData.main ? <span>{weatherData.weather[0].main}
                </span> : null}</p>
            </div>
        </div>
    )
}

