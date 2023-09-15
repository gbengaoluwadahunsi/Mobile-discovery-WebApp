
 import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './styles.css'
import './index.css';
import TopMovies from './components/TopMovies';
import MovieDetails from './components/MovieDetails';
import MovieSearch from './components/MovieSearch';




function App() {

  return (

    <div className="App">
    <Router>
        <Routes>
            <Route index element={<TopMovies />}></Route>
            <Route path="movie/:id" element={<MovieDetails />}></Route>
            <Route path="moviesearch" element={<MovieSearch />} />
        </Routes>
    </Router>
    </div>
   
  )
}

export default App
