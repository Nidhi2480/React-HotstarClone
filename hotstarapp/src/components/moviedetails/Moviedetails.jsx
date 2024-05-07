import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import MoviesData from '../../moviedata/Moviesdata';
import Header from '../header/Header'
import Details from './Details'
function Moviedetails({changeBanner,isbanner}){
    const params = useParams();
    const id=params.id
    const genre=params.genre
    console.log(params)
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.sampleapis.com/movies/${genre}/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.posterURL){
                        console.log(data.posterURL);
                    }else{
                        const selectedMovie = MoviesData.find(movie => movie.id === parseInt(id));
                        if(selectedMovie){   
                            changeBanner(selectedMovie)
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
    }, [changeBanner,id]);

  
    return(<>
        <Header changeBanner={changeBanner} movie={isbanner}/>
        <Details /></>
    )
}

export default Moviedetails