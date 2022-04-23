import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function ActorView() {
    const { id } = useParams()
    const [actorData, setActorData] = useState([])
    const [filmData, setFilmData] = useState([])

    // Get actor data from API
    useEffect(() => {
        const API_URL = `http://localhost:4000/person/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setActorData(resData)
        }
        fetchData()
    }, [id])

    // Get actor filmography from API
    useEffect(() => {
        const API_URL = `http://localhost:4000/person/${id}/credits`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setFilmData(resData.cast)
        }
        fetchData()
    }, [id])

    const filmography = filmData.map((film, i) => {
        return (
            <div key={i}>
                <Link to={`/movie/${film.id}`}>
                    <p>{film.original_title}</p>
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.original_title}></img>
                </Link>
                <p>{film.character}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>{actorData.name}</h1>
            <img src={actorData.profile_path} alt={actorData.name}></img>
            <p>{actorData.biography}</p>
            <h3>Filmography</h3>
            {filmography}
        </div>
    )
}

export default ActorView