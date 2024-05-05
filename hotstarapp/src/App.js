import { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/sidebar/Nav';
import Content from './components/contents/Content';
import TrailerImage from './media/starwarsbanner.webp';
import Footer from "./components/footer/Footer";
import Moviedetails from './components/moviedetails/Moviedetails';
import './App.css';

function App() {
 
 const [isbanner,setBanner]=useState(TrailerImage)
    const changeBanner=(url)=>
       {
           setBanner(url)
       }
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Content changeBanner={changeBanner} isbanner={isbanner} />} />
          <Route path="/movies/:id?" exact element={<Moviedetails changeBanner={changeBanner} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;