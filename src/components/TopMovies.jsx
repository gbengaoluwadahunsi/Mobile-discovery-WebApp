import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight ,  faHeart, faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import image from '../Images/rottenTomatoes.png'
import '../styles.css';
import  '../index.css'

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [viewingTopTen, setViewingTopTen] = useState(true); 

  useEffect(() => {
    fetchTopMovies();
  }, [page]);

  const fetchTopMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=2cbea6cb82e4cac0b766240759b70613`
      );

      if (page === 1) {
        const topMoviesData = response.data.results.slice(0, 10).map(movie => ({...movie, isTop: true}));
        setTopMovies(topMoviesData);
        setViewingTopTen(true);
      } else {
        setTopMovies(response.data.results.slice(10, 20));
        setViewingTopTen(false);
      }
    } catch (error) {
      console.error('Error fetching top movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSeeMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleTopTen = () => {
    setPage(1);
    setViewingTopTen(true);
  };

  return (
    <div>
      <div className="header  px-8  lg:px-14 text-white    bg-no-repeat bg-cover ">
        

        <Header/>
        <div>

            <div className='  lg:pt-10'>
              <h1 className='text-2xl lg:text-6xl lg:mt-4 font-semibold'>John Wick 3:</h1>
              <h1 className=' text-2xl lg:text-6xl font-semibold'>Parabellum</h1>
            </div>

            <div className='lg:h-96 lg:mt-4'>
           <div className=' lg:w-1/4'>
           <div className=' grid grid-cols-2 lg:grid-cols-3  lg:w-full place-items-center '>
                <div className='lg:mr-20 lg:col-span-2 TMDB'>
                  <span className='bg-yellow-600 text-sm  rounded p-1  font-bold text-black'>TMDB</span>
                  <span className=' ml-1  font-semibold'>86.0 / 100</span>
                </div>


                <div className='grid grid-cols-2 gap-4   mt-1 lg:place-items-center'>
                  <img  className='justify-self-end  w-4 lg:w-8' src={image} alt="Movie rating icon" />
                  <span className=' font-semibold'>97%</span>
                  </div>
              </div>
          </div>
  
          <p className='lg:w-96  mb-10 lg:mb-4  text-xs lg:text-lg lg:font-medium'>John Wick is on the run after killing a member of the international assasins&apos; guild, and with $14 miliion price tag on his head, he is the target of hit men and women everywhere</p>
          <span className=  'bg-rose-700 mb-8 text-xs lg:text-xl font-medium   p-2 rounded trailer'> <FontAwesomeIcon icon= {faCirclePlay}/> WATCH TRAILER</span>
          
        </div>
        

        </div>
      </div>
      
      
      <div className=' grid  grid-cols-1 place-items-center gap-8 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-4  m-8 lg:mt-12 lg:mx-16 lg:gap-x-20 pl-5 lg:place-items-center lg:justify-items-start'>
        <h2 className='text-black lg:text-4xl col-span-3 font-bold cursor-pointer' onClick={handleTopTen}>
          {viewingTopTen ? 'Top Ten Movies' : 'Back to Top Ten Movies'}
        </h2>
        <h3
          className='  ml-10 lg:flex text-red-600 lg:ml-10 lg:pl-16 font-medium lg:text-2xl place-items-center cursor-pointer'
          onClick={handleSeeMore}>
          See More <FontAwesomeIcon className='place-items-center ml-1 ' icon={faAngleRight} />
        </h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:grid-cols-4 lg:mx-14 movie-card' data-testid='movie-card'>
        {topMovies.map(movie => (
            <div key={movie.id} className='card' data-testid = 'card-unit'>
              <Link to={`/movie/${movie.id}`}> 
            <div className="relative">
            {movie.isTop && <span className=" rounded-full p-2 absolute toppy top-4  right-16 md:right-20 lg:right-10 bg-gray-300  text-white  text-xs font-semibold"><FontAwesomeIcon icon= {faHeart} size='2x' /></span>}
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.poster}
              className="mx-auto"
              style={{ width: '250px' }}
              loading='lazy'
              data-testid="movie-poster"
            />
          </div>
                <div className='grid grid-cols-1 ml-16  mt-2 lg:mx-8 '>
                  <h3 className="  justify-center col-span-2  font-bold text-slate-900 title " data-testid="movie-title">
                    {movie.title}
                  </h3>
                  <p className="movie-release-date  text-sm font-medium text-gray-400 title" data-testid="movie-release-date">
                    Release Date: {movie.release_date}
                  </p>
                </div>
              
              <div className='grid grid-cols-3 place-items-center my-4  lg:mx-8'>
                  <div className=' lg:mr-10 col-span-2'>
                    <span className='bg-yellow-600   rounded p-1  font-bold text-black' data-testid = 'TMDB-icon'>TMDB</span>
                    <span className=' ml-2 font-semibold' data-testid = 'movie rating'>{`${movie.vote_average* 10} / 100`}</span>
                  </div>


                  <div className='grid   grid-cols-2 place-items-center  tomato'>
                    <img  className='m-b-10' src={image} alt="Movie rating icon" data-testid = 'TMBD-rotten egg icon' />
                    <span className='font-semibold popular' data-testid = 'movie-popularity'>{`${Math.round(movie.popularity)}%`}</span>
                    </div>
                </div>
            </Link>
          </div>
        ))}
      </div>
      {loading && <div>Loading...</div>}
      <Footer />
    </div>
  );
};

export default TopMovies
