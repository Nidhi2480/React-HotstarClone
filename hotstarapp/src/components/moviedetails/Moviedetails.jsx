import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { FetchMovie } from "../../data/api/Fetchmovies";
import Details from "./Details";
import Header from '../header/Header'
import './details.css'
function Moviedetails({changeBanner,isbanner}){

    const params = useParams();
    const id=params.id
    let genre=params.genre
   
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const Moviedata = await FetchMovie(genre,id);
                changeBanner(Moviedata)
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };
        if (id) {
            fetchMovie();
        }
    }, [genre,id,changeBanner]);
    
  
    return(
    <div className="detailed-view">
        <Header changeBanner={changeBanner} movie={isbanner}/>
        <div className="shadow"></div>
        <div className="rows" >
      
        <Details genre={genre}/>
        </div>
    </div>
    )
}

export default Moviedetails