import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <div className="title-container">
      <h3>{movie.title}</h3>
    </div>
    <div className="content-container">
      <div className="image-container">
        {movie.image_url ? (
          <img src={movie.image_url} alt={movie.title} />
        ) : (
          <div className="placeholder-image">Image1</div>
        )}
      </div>
      <div className="description-container">
        <p className="description-para">{movie.short_description}</p>
        <Link to={`/movies/${movie._id}`}>Read more</Link>
      </div>
    </div>
  </div>
);

export default MovieCard;
