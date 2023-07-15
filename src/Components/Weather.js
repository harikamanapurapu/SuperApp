import { useEffect, useState } from "react"
import pressure from '../Components/assets/pressure.png'
import wind from '../Components/assets/wind.png'
import humidity from '../Components/assets/humidity.png'
import '../Components/Weather.css'

function Weather(){
    const [weather, setWeather] = useState(false)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    // console.log(weather)
    useEffect(()=>{
        const fetchWeather = async()=>{
            await fetch("https://api.weatherapi.com/v1/current.json?key=41eff91a318b42ac97c103606232605&q=Hyderabad&aqi=no")
                .then(async(data)=>await data.json()).then((data)=>setWeather(data)) 
        }
        fetchWeather()
    },[])


    useEffect(()=>{
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })

    return(
            <div className="weather">
                <div className="dateandtime">
                    <span className="dt">{date}</span>
                    <span className="dt">{time}</span>
                </div>
                {weather ? (
                    <div className="weatherdetails">
                    <div className="condition">
                        <img src={weather.current.condition.icon} alt="cloudy" className="cloud"/>
                        <p className="weathercondition">{weather.current.condition.text}</p>
                    </div>
                    <hr style={{margin:20}}/>
                    <div className="temp-pres">
                        <p className="temp">{weather.current.temp_c}&#8451;</p>
                        <div className="press"> 
                            <img src={pressure} alt="pressure" style={{width:15},{height:25}} />
                            <p className="press-con">{weather.current.pressure_mb}mbar Pressure</p>
                        </div>
                    </div>
                    <hr style={{margin:20}}/>
                    <div className="win-hum">
                        <div className="win">
                            <img src={wind} alt="wind" style={{width:30},{height:30},{margin:10}}></img>
                            <p className="wind">{weather.current.wind_kph}km/h Wind</p>
                        </div>
                        <div className="hum">
                            <img src={humidity} alt="hum" style={{width:25},{height:25},{margin:10}} />
                            <p className="humidity">{weather.current.humidity}% Humidity</p>
                        </div>
                    </div>
                </div>):<></>}
            </div>
    )



}

export default Weather



//current.condition.icon, text
//current.temp_c
//current.pressure_mb
//current.wind_kph
//current.humidity
