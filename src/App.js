import './App.css';
import ActorView from './components/ActorView';
import HomeView from './components/HomeView';
import MovieView from './components/MovieView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">    
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movie/:id" element={<MovieView />} />
          <Route path="/actor/:id" element={<ActorView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;