import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function MovieView() {
    const { id } = useParams()
    const [movieData, setMovieData] = useState([])
    const [castData, setCastData] = useState([])

    // Get movie data from API
    useEffect(() => {
        const API_URL = `http://localhost:4000/movie/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setMovieData(resData)
        }
        fetchData()
    }, [id])

    // Get cast from API
    useEffect(() => {
        const API_URL = `http://localhost:4000/movie/${id}/credits`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setCastData(resData.cast)
        }
        fetchData()
    }, [id])

    const cast = castData.map((actor, i) => {
        return (
            <div key={i}>
                <Link to={`/actor/${actor.id}`}>
                    <p>{actor.name}</p>
                </Link>
                <p>{actor.character}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>{movieData.original_title}</h1>
            <img src={movieData.poster_path} alt={movieData.original_title}></img>
            <p>{movieData.overview}</p>
            <h3>Cast</h3>
            {cast}
        </div>
    )
}

export default MovieView