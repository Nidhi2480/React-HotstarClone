import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/sidebar/Nav';
import Content from './components/contents/Content';
import Header from './components/header/Header'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Content/>} />
          <Route path="/movies/:id?" exact element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;