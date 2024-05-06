import React,{useEffect} from "react"
import { useParams } from "react-router-dom";
import Trailer from "../banner/Trailer"
import TrailerDesc from "../bannerdesc/TrailerDesc";


function Header({changeBanner,movie}){
    
    const { id } = useParams();
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.sampleapis.com/movies/family/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data.posterURL)
                    changeBanner(data.posterURL);
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
    }, [id]);


   
    return (
        <>
        <Trailer movie={movie}/> 
        <TrailerDesc changebanner={changeBanner} movie={movie}/>   
        </>

    )
}

export default Header;