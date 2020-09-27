import React, {Component} from 'react';
import { Button } from 'reactstrap';

import WeatherDisplay from './WeatherDisplay';

export default class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'init',
            weatherData: null
        }
    };

    componentDidMount(){
        this.weatherStart();
    }

    weatherStart = () => {
        console.log(this.state);
        const success = position => {
            this.setState({status: 'fetching'});
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            this.getWeather(latitude, longitude);
        };
        const error = () => {
            this.setState({status: 'unable'});
            alert("Unable to retrieve your location");
        };

        navigator.geolocation.getCurrentPosition(success, error);
    }

    getWeather = (latitude, longitude) => {
        const API_KEY = `4bdec29f5cd6d1ed8f21c91571219cf8`;
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`

        fetch(`${API_URL}`)
        .then(response => response.json())
        .then(result => {
            const {name} = result;
            const { temp, temp_min, temp_max, feels_like, humidity} = result.main;
            const {description} = result.weather[0];
            const {speed, deg} = result.wind;

            let data = {
                    name,
                    description,
                    temp: temp.toFixed(1),
                    feels_like: feels_like.toFixed(1),
                    temp_min: temp_min.toFixed(1),
                    temp_max: temp_max.toFixed(1),
                    speed,
                    deg,
                    humidity
                }
                console.log(data);
            this.setState({ status: 'success', weatherData: data})
            console.log(this.state);
            });
    }

    returnActiveView = (status) => {
        switch(status) {
            case 'init':
                return(
                    <Button className='btn-main' onClick={(e) => this.weatherStart(e)}>Get Location</Button>
                );
            case 'success':
                return <WeatherDisplay weather={this.state.weatherData} />;
            default:
                return(
                    <Button className='btn-main' onClick={(e) => this.weatherStart(e)}>Get Location</Button>
                );

        }
    }

    render() {
        return (
            <div>
                {this.returnActiveView(this.state.status)}
            </div>
        )
    }
}