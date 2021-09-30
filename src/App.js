import React, { useState } from "react";
import "./styles.css";

var movieDB = {
  iq: [
    { name: "Inception", rating: " ⭐ ⭐ ⭐ ⭐" },
    { name: "Intersetllar", rating: " ⭐ ⭐ ⭐" },
    { name: "Memento", rating: " ⭐ ⭐ ⭐ ⭐ ⭐" }
  ],
  marvel: [
    { name: "Endgame", rating: " ⭐ ⭐ ⭐ ⭐ " },
    { name: "Infinitywar", rating: " ⭐ ⭐ ⭐ ⭐ ⭐" },
    { name: "Black Panther", rating: " ⭐ ⭐ ⭐ " }
  ],
  notSuperhero: [
    { name: "JamesBond", rating: " ⭐ ⭐" },
    { name: "Mission: Impossible", rating: " ⭐ ⭐ ⭐ ⭐" },
    { name: "Fast & Furious", rating: "⭐ ⭐ ⭐" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("marvel");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> Movie Recomendation</h1>
      <p> check my fav movies. Select a genre to see </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
