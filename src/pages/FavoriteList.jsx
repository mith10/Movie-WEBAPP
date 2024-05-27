import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import './MovieList.css'; // Reuse the same CSS for consistency

const FavoriteList = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="movie-list">
      {favorites.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteList;
