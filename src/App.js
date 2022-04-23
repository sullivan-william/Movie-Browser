import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import ActorView from './components/ActorView';
import HomeView from './components/HomeView';
import MovieView from './components/MovieView';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import FavoritesView from './components/FavoritesView';

function App() {
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
    <Router>
      <Navbar />
      <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='What The Film?' />
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
          <MovieListHeading heading='My Favorites' />
        </div>
        <div className='row'>
          <MovieList
            movies={favorites}
            handleFavoritesClick={addFavoriteMovie}
            favoriteComponent={AddFavorites}
          />
        </div>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movie/:id" element={<MovieView />} />
          <Route path="/actor/:id" element={<ActorView />} />
          {/* <Route path="/favorites" element={<FavoritesView/>} /> */}

        </Routes>

      </div>
    </Router>
  );
}

export default App;

