import React, { useRef, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MovieList from "./components/MovieList";
import movies from "./data/movies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const home = useRef(null);
  const myListRef = useRef(null);
  const genres = [
    "Action",
    "Comedy",
    "Sci-Fi",
    "Horror",
    "Adventure",
    "Drama",
    "Fantasy",
    "Crime"
  ];

  const genreRefs = useRef({});
  genres.forEach((genre) => {
    if (!genreRefs.current[genre]) {
      genreRefs.current[genre] = React.createRef();
    }
  });

  const [myList, setMyList] = useState([]);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addToMyList = (movie) => {
    if (!myList.find((m) => m.id === movie.id)) {
      setMyList([...myList, movie]);
    }
  };

  return (
    <>
      <Header
        onScroll={scrollToSection}
        refs={{
          home,
          mylist: myListRef,
          ...Object.fromEntries(
            genres.map((g) => [g.toLowerCase(), genreRefs.current[g]])
          )
        }}
      />

      <div ref={home} style={{ scrollMarginTop: "100px" }}>
        <HeroSection />
      </div>

      {genres.map((genre) => (
        <div
          key={genre}
          ref={genreRefs.current[genre]}
          style={{ scrollMarginTop: "100px", padding: "40px 60px" }}
        >
          <MovieList
            title={`${genre} Movies`}
            genre={genre}
            addToMyList={addToMyList}
          />
        </div>
      ))}

      <div
        ref={myListRef}
        style={{ scrollMarginTop: "100px", padding: "40px 60px" }}
      >
        <MovieList title="My List" movies={myList} />
      </div>
    </>
  );
}

export default App;
