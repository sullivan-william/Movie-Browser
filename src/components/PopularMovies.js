import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function PopularMovies() {

    const [movieData, setMovieData] = useState([])

    // function here to retrieve list of trending movies from server via api
    useEffect(() => {
        const API_URL = 'http://localhost:4000/movie/popular'
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setMovieData(resData.results)
        }
        fetchData()
    }, [])

    const popularMovies = movieData.map((movie, i) => {
        return (
            <div key={i}>
                <p>
                    <Link to={`/movie/${movie.id}`}>
                        {movie.original_title}
                    </Link>
                </p>
                <Link to={`/movie/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title}></img>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h3>List of trending movies here</h3>
            {movieData.length > 0 ? popularMovies : <h2>Loading...</h2>} 
        </div>
    )
}

export default PopularMovies