
import  { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import  image from  '../Images/tv.png'
import  image2 from  '../Images/Home.png'
import image3 from  '../Images/Movie Projector.png'
import image4 from  '../Images/TV Show.png'
import image5 from '../Images/Calendar.png'
import image6 from  '../Images/Logout.png'
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const  formatToCustomUTC  = (dateString)  =>{
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  }

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: '2cbea6cb82e4cac0b766240759b70613',
            },
          }
        );
        console.log('Response:', response.data); 
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <div className='flex  flex-col lg:flex-row '>


          <div className=' grow rounded-r-3xl w-1/3 border-r-2 border-gray-400  flex  flex-row lg:flex-col p-6 gap-4 details'>
              <div  className='flex flex-col lg:flex-row gap-4 p-4'>
                <img className='movie' src= {image} alt="movie box logo rounded-lg" />
                <span className=' lg:pt-1 font-bold'>MovieBox</span>
               </div>

              <Link to={'/'}>               
              <div className='flex flex-row gap-4  p-4 rounded-lg hover:bg-rose-400'>
               <img src={image2} alt="home icon" />          
                  <button > HOME</button>
              </div>
              </Link>

              <div className='flex  bg-rose-400  rounded-lg p-4 flex-row gap-4 hover:bg-rose-400' >
               <img src={image3} alt=" movies icon" />
                <span>Movies</span>
              </div>

              <div className='flex flex-row gap-4  rounded-lg p-4 hover:bg-rose-400' >
                <img src={image4} alt="tv show icon" />
                <span>TV Series</span>
              </div>

              <div className='flex flex-row rounded-lg p-4 gap-4 hover:bg-rose-400'>
                <img src={image5} alt="calender-icon" />
                <span>Up Coming</span>
              </div>

              <div className='rounded-3xl font-bold border-2 p-2 bg-rose-50 border-rose-400 '>
                <h6 className=''>Play movie quizes and earn free tickets</h6>
                <span className='text-gray-600 text-sm '>50k people are playing now</span>
                <button className='text-pink-800 py-1  px-4 bg-rose-200 rounded-full center border-2 play '> Start Playing</button>
              </div>

              <div className='flex flex-row gap-4 rounded-lg p-4 hover:bg-rose-400' >
                <img src={image6} alt=" log out icon" />
                <span>Log Out</span>
              </div>
          

          </div>

          <div className=' m-6'>
            <div >
              <div className='text-xl flex flex-col   font-bold  playButton '>
              <FontAwesomeIcon  className = "text-white "  size = "2x" icon = {faCirclePlay} />
              <span className='text-white'>Watch Trailer</span>
              </div>
              <img className=' w-96 rounded-lg width' src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} alt={movie.title} loading='lazy' data-testid="movie-poster" />
            </div>
              
              <div className=' mt-5 font-semibold'>
                <div className='flex flex-row gap-10 font-bold'>
                <span data-testid="movie-title" > {movie.title}</span>
                <span  data-testid="movie-release-date"> {formatToCustomUTC(movie.release_date)}</span>
                <span data-testid="movie-runtime"> {movie.runtime} minutes</span>
                </div>

                <span className=' mt-2 block text-gray-700 ' data-testid="movie-overview"> {movie.overview}</span>
              
              </div>
          </div>

      </div>
    </>
  );
};

export default MovieDetails;
