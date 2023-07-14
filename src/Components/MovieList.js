
import { useEffect, useState } from "react"
import styles from '../Components/MovieList.css'
const MovieList = ({genre})=>{

    const [movies, setMovies] = useState([])
    console.log(movies)


    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e31bd625a2mshee5053d603750aap1f548djsn08ad930d0bce',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const fetchMovies = async()=>{
            await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`, options)
                .then(response => response.json())
                .then(response => setMovies(response.results.splice(4,4)))
                .catch(err => console.error(err));
        }
        fetchMovies();
    },[])
    return(
        <>
        <p className={styles.genreHeading}>{genre}</p>
        <div style={{display:"flex",overflow:"hidden",marginLeft:"2vw"}}>
            {movies.map((movie,idx)=>{
                console.log(movie?.primaryImage?.url)
                return (
                <div key={idx} style={{width:"20vw",margin:"2vw"}}>
                    <img src={movie?.primaryImage?.url} style={{objectFit:"cover", width:"20vw", height:"20vh",borderRadius:"12px"}}/>
                </div>
                )
            })}
        </div>
        </>
    )
}

export default MovieList