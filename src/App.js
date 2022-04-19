// import { useState, useEffect } from 'react'
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Favorites from './pages/favorites';
import Releases from './pages/releases';
import Popular from './pages/popular';


function App() {
  // let [movies, setMovies] = useState([]);
  // let [data, setData] = useState('');

  // useEffect( async () => {
  //   document.title = 'What The Film'
  //   let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b3573849`)
  //   let resData = await response.json()
  //   setData(resData)
  // },[movies])



  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/releases' component={Releases} />
        <Route path='/popular' component={Popular} />
      </Routes>
    </Router>
  );
}

export default App;
