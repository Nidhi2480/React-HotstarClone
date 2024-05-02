import React, { useState } from "react"
import Row from "../movielistrow/Row"
import Trailer from "../banner/Trailer"
import TrailerDesc from "../bannerdesc/TrailerDesc";
import Trailervid from '../../media/starwars.mp4';
import './contents.css';
function Content(){
    const [isbanner,setBanner]=useState(null)
    const changeBanner=(url)=>
    {
        setBanner(url)
    }
    return (
     
        <div className="banner">
            <Trailer trailer={Trailervid} banner={isbanner}/> 
            <TrailerDesc changebanner={changeBanner} />
            <div className="shadow"></div>
            <div className="rows">
                <Row rowName="Latest Shows" apiUrl="https://api.sampleapis.com/movies/family" smallRow={false}/>
                <Row rowName="Western" apiUrl="https://api.sampleapis.com/movies/western" smallRow={true}/>
                <Row rowName="Classic" apiUrl="https://api.sampleapis.com/movies/classic" smallRow={false}/>
                <Row rowName="Drama" apiUrl="https://api.sampleapis.com/movies/drama" smallRow={false}/>
            </div>
    </div>
    
    )
}
export default Content