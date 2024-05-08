import { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/sidebar/Nav';
import Content from './components/contents/Content';
import MoviesData from './moviedata/Moviesdata';
import Footer from "./components/footer/Footer";
import Moviedetails from './components/moviedetails/Moviedetails';
import './App.css';

function App() {
 
  const [ismovie,setBanner]=useState(MoviesData[0])
    const changeBanner=(movie)=>
       {
           setBanner(movie)
       }
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/"  element={<Content changeBanner={changeBanner} isbanner={ismovie} />} />
          <Route exact path="/movies/:id/:genre?"  element={<Moviedetails changeBanner={changeBanner} isbanner={ismovie}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;