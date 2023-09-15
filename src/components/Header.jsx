
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGripLines, faSearch} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  image from  '../Images/tv.png'
import '../styles.css'



 const Header = ()  => {
 
    return (
        <>
            <div className='flex  flex-col gap-6  lg:flex-row  justify-between lg:pt-10   content-center '>
                <div className='  flex items-center   content-center'>
                <img src= {image} alt="movie box logo" />
                <span className='lg:text-4xl  text-white ml-2 pt-4 lg:pt-2 font-bold'>MovieBox</span>
                </div>
                <form  className = "rounded-2xl  w-full  lg:w-2/5   border-2  border-white search"  id="form" role="search">
                <input type="text" className="text-white"  placeholder='What do you want to watch?'/>
                <Link to="/moviesearch">
                <button>
                    <FontAwesomeIcon className='mt-6' icon={faSearch} />
                </button>
                </Link>
                </form>              
                <div className='flex  flex-rows items-center  sign content-center'> 
                <span className=' pt-2   lg:text-2xl  text-white font-medium sign-in'>Sign In</span>
                <FontAwesomeIcon className=' p-2 g:p-4 text-xs  lg:text-2xl   ml-2 lg:ml-6 rounded-full bg-rose-700 ' icon={faGripLines} />
                </div>
            </div >
                    
        </>
  )
}

export default Header