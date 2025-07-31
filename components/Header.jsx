import React from "react";
import "./Header.css";

function Header({ onScroll, refs }) {
  const genreList = [
    "Action", "Comedy", "Sci-Fi", "Horror",
    "Adventure", "Drama", "Fantasy", "Crime"
  ];

  return (
    <header className="header">
      <div className="logo">MovieTime</div>
      <nav className="nav">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onScroll(refs.home);
        }}>
          Home
        </a>
        {genreList.map((genre) => (
          <a
            key={genre}
            href="#"
            onClick={(e) => {
              e.preventDefault(); // ✅ QUAN TRỌNG
              onScroll(refs[genre.toLowerCase()]);
            }}
          >
            {genre}
          </a>
        ))}
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onScroll(refs.mylist);
        }}>
          My List
        </a>
      </nav>
    </header>
  );
}

export default Header;
