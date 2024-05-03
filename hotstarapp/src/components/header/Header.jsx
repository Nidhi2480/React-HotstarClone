import React,{useState,useEffect} from "react"
import { useParams } from "react-router-dom";
import Trailer from "../banner/Trailer"
import TrailerDesc from "../bannerdesc/TrailerDesc";
import Trailervid from '../../media/starwars.mp4';
import TrailerImage from '../../media/starwarsbanner.webp';

function Header(){
    const [isbanner,setBanner]=useState(TrailerImage)
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            console.log(id)
        }
    }, [id]);

    const changeBanner=(url)=>
    {
        setBanner(url)
    }
    return (
        <>
        <Trailer trailer={Trailervid} banner={isbanner}/> 
        <TrailerDesc changebanner={changeBanner} />   
        </>

    )
}

export default Header;