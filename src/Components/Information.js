import { useState , useEffect } from "react";
import React from "react";
import '../Components/Information.css'
import dev from '../Components/assets/User.png'



function Info(){


    const [genres,setGenres]=useState([])

    const displayGenres= JSON.parse(localStorage.getItem('selectedGenres'))
    useEffect(()=>{
        if(displayGenres){
        setGenres(displayGenres)
    }},[])




    return(
        <div className="left-box">
            <div className="details">
                <img src={dev} alt="user" className="Image"/>
                <div className="info">
                    <p className="name">{localStorage.getItem("name")}</p>
                    <p className="email">{localStorage.getItem("email")}</p>
                    <p className="username">{localStorage.getItem("userName")}</p>
                    <ul className="category">
                        {genres.map((genre,index)=>(
                        <li key={index} className="categ">
                            <span className="genreItem">{genre}</span>
                        </li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Info

//<p className="dt">{weather.location.localtime}</p>
//<p>{weather.current.condition.text}</p>
 //   <p>{weather.current.temp_c}</p>
 //   <p>{weather.current.pressure_mb}mbar<span>Pressure</span></p>
 //<p>{weather.current.wind_kph}</p>
 //<p>{weather.current.humidity}</p>
 //