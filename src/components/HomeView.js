import NewReleases from "./NewReleases"
import PopularMovies from "./PopularMovies"

function HomeView() {
    return (
        <div>
            <h1>Home Page</h1>
            <NewReleases />
            <PopularMovies />
        </div>
    )
}

export default HomeView