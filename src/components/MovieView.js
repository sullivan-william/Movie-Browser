import { useEffect, useState } from "react"
import { Badge, Carousel } from "react-bootstrap"
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
        const API_URL = `http://localhost:4000/movie/cast/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
            setCastData(resData.cast)
        }
        fetchData()
    }, [id])

    const cast = castData.map((actor, i) => {
        return (
            <Carousel.Item>
                <Link to={`/actor/${actor.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} style={{ width: '18em', marginLeft: '20%', marginBottom: '2%' }}></img>
                </Link>
                <Carousel.Caption style={{ marginLeft: '40%', marginBottom: '10%' }}>
                <Link to={`/actor/${actor.id}`}>
                    <h3>{actor.name}</h3>
                </Link>
                    <h3>as {actor.character}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })

    // Get reviews from API


    return (
        <div>
            <h1>{movieData.original_title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt={movieData.original_title}></img>
            <p>{movieData.overview}</p>
            <Badge bg="danger" style={{ width: '90%', margin: '2em' }}>
                <h2>Cast</h2>
            </Badge>
            <Carousel>
                {cast}
            </Carousel>
            <Badge bg="danger" style={{ width: '90%', margin: '2em' }}>
                <h2>Reviews</h2>
            </Badge>
            <div>
                <h2>Add your own review?</h2>
                <form method='POST' action={`/movie/${id}/review`}>
                <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <textarea className='form-control' id='content' name='content'></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor='author'>Author</label>
                    <input className='form-control' id='author' name='author'></input>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MovieView