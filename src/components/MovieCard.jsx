import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/moviesSlice';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="movie-card" onClick={() => window.open(movie.imdb_url, '_blank')}>
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Rating: {movie.rating}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Genre: {movie.genre}</p>
        <p>Director: {movie.director}</p>
        <button className="favorite-btn" onClick={handleFavoriteClick}>
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
