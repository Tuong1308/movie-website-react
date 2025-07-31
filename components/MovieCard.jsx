import React from "react";
import "./MovieCard.css";
import { FaPlay, FaPlus } from "react-icons/fa";

function MovieCard({ title, image, rating, genres, onAddToMyList }) {
  return (
    <div className="movie-card">
      <div className="movie-image-wrapper">
        <img src={image} alt={title} className="movie-image" />
        <div className="overlay">
          <div className="rating">⭐ {rating}</div>
          <div className="genres">
            {genres.map((genre, index) => (
              <span key={index} className="genre-tag">{genre}</span>
            ))}
          </div>
          <div className="play-button">
            <FaPlay />
          </div>
          {onAddToMyList && (
            <button className="add-btn" onClick={onAddToMyList} title="Add to My List">
              <FaPlus />
            </button>
          )}
        </div>
      </div>
      <p className="movie-title">{title}</p>
    </div>
  );
}

export default MovieCard;
