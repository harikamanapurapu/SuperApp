import React from "react";
import favcon from '../Components/assets/favcon.png'
import '../Components/Movies.css'
import MovieList from "../Components/MovieList";

function Movies(){
    const movies = JSON.parse(window.localStorage.getItem("selectedGenres"))
    return(
        <>
        <img src={favcon} alt="img"  style={{position:"absolute",top:"2vh",right:"3vw",height:"60px",width:"60px"}} />
        <div style={{width:"100vw",minHeight:"100vh",background:"black",overflowX:"hidden"}}>
            <p style={{color:"green",fontSize:"3rem",margin:"1vw",fontFamily:"Single day",}}>Super App</p>
            <p style={{color:"white",fontSize:"2rem",margin:"3vw",fontFamily:"Roboto"}}>Entertainment according to your choice</p>
            {movies.map((movie)=><MovieList genre={movie}/>)}
        </div>
        </>
    )
}

export default Movies