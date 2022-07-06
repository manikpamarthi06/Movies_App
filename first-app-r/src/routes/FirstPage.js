import React from "react";
import { MovieCard } from "../components";

function FirstPage(props) {
  const { searchMovie, getMoviesList, setSearchMovie } = props;
  let movies_div = props.movies?.map((movie, index) => {
    console.log(movie);
    return (
      <MovieCard
        title={movie.Title}
        desc={"Movie Description"}
        imageUrl={movie.Poster}
        key={`movie-${index}`}
        year={movie.Year}
        imdbId={movie.imbdID}
        type={movie.Type}
      />
    );
  });
  return (
    <>
      <h1>Search Movie</h1>
      <input
        id="movieName"
        type="text"
        value={searchMovie}
        placeholder="Type to search......"
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <button onClick={() => getMoviesList(searchMovie)}>Search</button>
      <div className="movies_list">
        <div className="wrapper">
          <div className="card-deck">{movies_div}</div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
