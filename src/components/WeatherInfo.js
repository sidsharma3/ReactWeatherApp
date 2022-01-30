import React from 'react';
import "./css/style.css"

const WeatherInfo = ({onEnter, city}) => {
    return (
        <div className="box">

                <div className="inputData">
                    <input 
                    type="text" 
                    className="inputField" 
                    onKeyDown={onEnter}
                    />
                </div>

                {   
                    (city != null && city["cod"] === 200)
                    ? 
                    <div className="info">
                        <h2 className="location">
                            {`${city.name}, ${city.sys.country}`}
                        </h2>
                        <img 
                            src={`https://openweathermap.org/img/wn/${city.weather[0]["icon"]}@2x.png`}
                            alt="Weather Condition Icon"
                        />
                        <h1 className="temp">
                            {city.weather[0]["main"]}
                        </h1>
                        <h1 className="temp">
                            {`Current Temp: ${(city.main["temp"] - 273.15).toFixed(1)}°C`}
                        </h1>
                    </div>
                    : <h1> Could Not Find Weather Data on City </h1> 
                }

        </div>
    )
}


export default WeatherInfo;