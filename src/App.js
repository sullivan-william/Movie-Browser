import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Favorites from './pages/favorites';
// import Releases from './pages/releases';
// import Popular from './pages/popular';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b3573849`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
			setMovies(responseJson.Search);
		}

  };


  useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  const addFavoriteMovie = (movie) => {
		const newFavoriteList = [...favorites, movie];
		setFavorites(newFavoriteList);
	};

  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' exact component={Home} />
    //     <Route path='/about' component={About} />
    //     <Route path='/favorites' component={Favorites} />
    //     <Route path='/releases' component={Releases} />
    //     <Route path='/popular' component={Popular} />
    //   </Routes>
    // </Router>
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='What The Film!'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieList
					movies={movies}
					handleFavoritesClick={addFavoriteMovie}
					favoriteComponent={AddFavorites}
				/>
			</div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='My Favorites'/>
      </div>
      <div className='row'>
				<MovieList
					movies={favorites}
					handleFavoritesClick={addFavoriteMovie}
					favoriteComponent={AddFavorites}
				/>
			</div>
    </div>
  );
};

export default App;

