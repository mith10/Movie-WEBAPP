import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import FavoriteList from './pages/FavoriteList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Movies</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<FavoriteList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
