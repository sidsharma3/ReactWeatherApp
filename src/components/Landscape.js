import React, { useState, useEffect } from 'react';
import WeatherInfo from './WeatherInfo'
import "./css/style.css"

const Landscape = () => {

    const  [city, setCity] = useState();
    const [search, setSearch] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("name");
        const initialValue = saved;
        return initialValue || "Miami";
    });

    useEffect( () => {
        const fetchApi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cdeef7a7790b26556c37e7d5880fd47e`
            const response = await fetch(url);
            const resJson = await response.json();
            localStorage.setItem("name", search);
            setCity(resJson);
        } 

        fetchApi();
    },[search] )

    const onEnter = (event) => {
        if (event.key === 'Enter') {
            setSearch(event.target.value)
        }
    }
    
    
    return(
        <div className="container">
            
            <WeatherInfo 
                onEnter={onEnter} 
                city={city}
            />
            <div className="land" 
            style={{ 
                backgroundColor: 
                (city != null && city["cod"] === 200 && ((city.main["temp"] - 273.15).toFixed(1) <= 0.0))
                ? 
                "white" 
                : 
                "green"
            }} />
            <div className="sun"/>

        </div>
    )
}

export default Landscape;