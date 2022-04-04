import React, {useState} from 'react'
import axios from "axios";

function App() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    //const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=50fe3397071970c31985d4bb82ab4568`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=50fe3397071970c31985d4bb82ab4568`
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }

    }


    return (
        <div className="App">
            <div className="search">
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='City'
                    type="text"/>
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].description}</p> : null}
                    </div>
                </div>

                {data.name != undefined &&
                    <div className="bottom">
                        <div className="feels">
                            <p>Feels like</p>
                            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
                        </div>
                        <div className="humidity">
                            <p>Humidity</p>
                            {data.main ? <p>{data.main.humidity.toFixed()}</p> : null}
                        </div>
                    </div>
                }


            </div>
        </div>
    );
}

export default App;
