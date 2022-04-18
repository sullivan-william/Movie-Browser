import './App.css';
import ActorView from './components/ActorView';
import FavoritesView from './components/FavoritesView';
import HomeView from './components/HomeView';
import MovieView from './components/MovieView';

function App() {
  return (
    <div className="App">
      <HomeView />
      <MovieView />
      <ActorView />
      <FavoritesView />
    </div>
  );
}

export default App;