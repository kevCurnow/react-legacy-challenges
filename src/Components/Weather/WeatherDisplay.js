import React from 'react';

export default function WeatherDisplay(props) {
    console.log(props);
    return (
        <div>
            <h1>Location: {props.weather.name}</h1>
            <h2>Current Weather: {props.weather.description}</h2>
            <h3>Temperature Data</h3>
            <ul>
                <li>Temperature: {props.weather.temp}</li>
                <li>Feels Like: {props.weather.feels_like}</li>
                <li>Low Temperature: {props.weather.temp_min}</li>
                <li>High Temperature: {props.weather.temp_max}</li>
                <li>Humidity: {props.weather.humidity}</li>
            </ul>
            <h3>Wind Data</h3>
            <ul>
                <li>Wind Speed: {props.weather.speed}</li>
                <li>Wind Direction (Degrees): {props.weather.deg}</li>
            </ul>
        </div>
    )
}