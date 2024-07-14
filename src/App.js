import axios from 'axios'
import { useState, useEffect } from 'react';
import MovieCard from './Components/MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



export default function App() {

  const [movies, setMovies] = useState({});

  const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=ba212b83&s=';
  const getMovies = async () => {
    let { data } = await axios.get(url + "spider");
    setMovies(data.Search);
    console.log(data)
  }
  useEffect(() => {
    getMovies(movies);
  }, []);

  return <>
  
      <div className="app">
        <h1>movieland</h1>
        <div  className="search">
          <input
            placeholder="search for movies"
            // Add necessary onChange handler
          />
        </div>
                <div className="container">
                  {movies.length > 0 ? (
                    movies.map((movie) => (
                      <Link key={movie.title} to={`/details/${movie.imdbID}`}>
                        <MovieCard  movie={movie} />
                      </Link>
                    ))
                  ) : (
                    <div className="empty">
                      <h2>no movies found</h2>
                    </div>
                  )}
                </div>
      </div>
  );
    
  </>
}



