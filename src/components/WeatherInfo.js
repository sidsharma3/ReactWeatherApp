import React from 'react';
import "../css/style.css"

// This componenet is responsible for displaying the weather data
// for the given city and contains the form which is used to select a new city.
const WeatherInfo = ({onEnter, weatherData}) => {
    return (
        <div className="weatherDataBox">

                <div className="cityInputBox">
                    <input 
                    type="text" 
                    placeholder="Type a City Here and Press Enter to get the Weather!"
                    onKeyDown={onEnter}
                    />
                </div>

                {   
                    (weatherData != null && weatherData["cod"] === 200)
                    ? 
                    <div className="weatherData">
                        <h2 className="location">
                            {`${weatherData.name}, ${weatherData.sys.country}`}
                        </h2>
                        <img 
                            className="weatherIcon"
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0]["icon"]}@2x.png`}
                            alt="Weather Condition Icon"
                        />
                        <h1 className="textInfo">
                            {weatherData.weather[0]["main"]}
                        </h1>
                        <h1 className="textInfo">
                            {`Current Temp: ${(weatherData.main["temp"] - 273.15).toFixed(1)}°C`}
                        </h1>
                    </div>
                    : <h1> Could Not Find Weather Data on City </h1> 
                }

        </div>
    )
}


export default WeatherInfo;