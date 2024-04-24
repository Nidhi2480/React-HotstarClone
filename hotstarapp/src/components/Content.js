import React from "react"
import '../styles/banner.css';
import trailer from '../media/starwars.mp4'
import movielogo from '../icons/starwars.webp'
import smallposter from '../media/football.webp'
import Row from "../components/Row"
function Content(){
    return (
        <div className="banner">
            <div className="movie-trailer">
            <video autoPlay muted loop>
            <source src={trailer}/>
            Your browser does not support the video tag.
            </video></div>
            <div className="information">
                <img src={movielogo} alt="movieposter" />
                <div className="details">
                    <p>2019  * 2h 22m 4 * languages *<button>U/A 13+</button></p>
                </div>
                <div className="description">
                    <p>Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera film produced, co-written, ... </p>
                </div>
                <div className="category">
                    <p>Adventure | Action | Sci-FI | Fantasy</p>
                </div>
                <div className="row">
                    <div className="buttons"><button>Subscribe to Watch</button><button> + </button></div>
                    <div className="image"><img src={smallposter} alt="posters"/><img src={smallposter} alt="posters"/><img src={smallposter} alt="posters"/></div>
                    
                </div>
            </div>
            <div className="shadow"></div>
            <div className="rows">
                <Row title="Latest Releases" />
                <Row title="Best in sports" />
                <Row title="Top 10 in India Today - Hindi" />
                <Row title="Popular Shows" />
            </div>
    </div>
    
    )
}
export default Content