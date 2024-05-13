import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import Row from "../movielistrow/Row"
import MoviesData from '../../moviedata/Moviesdata';
import Header from '../header/Header'
import './details.css'
function Moviedetails({changeBanner,isbanner}){

    const params = useParams();
    const id=params.id
    let genre=params.genre
   
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.sampleapis.com/movies/${genre}/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.posterURL){
                        changeBanner(data);
                    }else{
                        const selectedMovie = MoviesData.find(movie => movie.id === parseInt(id));
                        if(selectedMovie){   
                            changeBanner(selectedMovie);
                        }
                    }
                    
                } else {
                    throw new Error('Failed to fetch movie');
                }
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
      
        <Row rowName="Movies Like This" apiUrl={`https://api.sampleapis.com/movies/${genre==='latestshows'?'drama':genre}`} smallRow={false} genre={`${genre==='latestshows'?'drama':genre}`}/>
        </div>
    </div>
    )
}

export default Moviedetails