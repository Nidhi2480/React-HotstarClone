import React, { useState ,useCallback} from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/sidebar/Nav';
import Content from './components/contents/Content';
import MoviesData from './moviedata/Moviesdata';
import Footer from "./components/footer/Footer";
import Moviedetails from './components/moviedetails/Moviedetails';
import './App.css';

export const Context=React.createContext();
function App() {
  const [FavMovies,setFavMovies]=useState([])
  const [ismovie, setBanner] = useState(MoviesData[0]);
  const [FavCount, setFavCount] = useState(0);
  console.log(FavMovies)
  const setCount= (action)=>{
    switch(action){
      case "add":
        setFavCount(prevCount => prevCount + 1);
      break;
    case "remove":
      setFavCount(prevCount => prevCount - 1);
      break;
    default:
      break;
    }
  }
 
  const setFavMoviesArray=(id,genre,movie,action)=>{
    switch (action){
      case "add":
        let Movie={
          movieid:id,
          Genre:genre,
          movie:movie
        }
        setFavMovies((prevFavMovies) => [...prevFavMovies, Movie])
    
        break;
      case "remove":
        setFavMovies((prevFavMovies) => prevFavMovies.filter(item => !(item.movieid === id && item.Genre === genre)));
        break;
      default:
        break;

    }


  }


  const changeBanner = useCallback((movie) => {
    setBanner(movie);
  }, []);
  return (
    <Router>
      <div className="App">
      <Context.Provider value={[setCount,FavCount,setFavMoviesArray,FavMovies]}>
        <Nav />
        <Routes>
          <Route exact path="/"  element={<Content changeBanner={changeBanner} isbanner={ismovie} />} />
          <Route exact path="/movies/:id/:genre?"  element={<Moviedetails changeBanner={changeBanner} isbanner={ismovie}/>} />
        </Routes>
        </Context.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;