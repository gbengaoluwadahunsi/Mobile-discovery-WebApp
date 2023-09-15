import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "./Header";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&quer');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='bg-pink-200'>
      <Header />
      <div>
        <Link to={'/'}>
          <button className='text-white text-2xl m-8'>Go back home</button>
        </Link>
        {loading ? (
          <p className='text-3xl'>Loading...</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
              <p>{movie.release_date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
