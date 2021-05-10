import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';


const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = "http://www.omdbapi.com/?s=spider man&apikey=94769322";

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return(
  <div>
    <div >
      <MovieList movies={movies} />
    </div>
  </div>
  );
};


export default App;
