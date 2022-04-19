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
