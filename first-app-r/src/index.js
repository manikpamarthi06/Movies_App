import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstPage, SecondPage } from "./routes";

import "./App.css";

function App() {
  let [movies, setMovies] = useState([]);
  let [searchMovie, setSearchMovie] = useState("");

  let getMoviesList = async (movieText) => {
    try {
      console.log("search Movie : ", movieText);
      let data = await fetch(
        `http://www.omdbapi.com/?s=${movieText}&apikey=263d22d8`
      );
      let data_json = await data.json();
      // console.log(data_json);
      setMovies(data_json.Search);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="second_page" element={<SecondPage />} />
        <Route
          path="/"
          element={
            <FirstPage
              getMoviesList={getMoviesList}
              searchMovie={searchMovie}
              setSearchMovie={setSearchMovie}
              movies={movies}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
