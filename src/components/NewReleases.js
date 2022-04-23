import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function NewReleases() {

    const [movieData, setMovieData] = useState([])

    // function to retrieve list of new movies from server via api
    useEffect(() => {
        const API_URL = 'http://localhost:4000/movie/now_playing'
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setMovieData(resData.results)
        }
        fetchData()
    }, [])

    const nowPlaying = movieData.map((movie, i) => {
        return (
            <div key={i}>
                <p>
                    <Link to={`/movie/${movie.id}`}>
                        {movie.original_title}
                    </Link>
                </p>
                <img src={movie.backdrop_path} alt={movie.original_title}></img>
            </div>
        )
    })

    return (
        <div>
            <h3>List of new releases here</h3>
            {movieData.length > 0 ? nowPlaying : <h2>Loading...</h2>} 
        </div>
    )
}

export default NewReleases