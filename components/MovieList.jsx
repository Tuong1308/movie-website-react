import React from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import movies from "../data/movies";
import "./MovieList.css";

function MovieList({ title, genre, movies: moviesProp, addToMyList }) {
  const filteredMovies = moviesProp || (genre
    ? movies.filter((movie) => movie.genres.includes(genre))
    : movies);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="movie-list">
      <h2>{title || "Popular Movies"}</h2>
      <Slider {...settings}>
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            rating={movie.rating}
            genres={movie.genres}
            onAddToMyList={addToMyList ? () => addToMyList(movie) : null}
          />
        ))}
      </Slider>
    </div>
  );
}

export default MovieList;
