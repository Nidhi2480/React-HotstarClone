import React,{useState} from "react"
import Row from "../movielistrow/Row"
import Header from "../header/Header"
import Companies from "../companiesrow/Companies";
import MoviesData from '../../moviedata/Moviesdata';
import './contents.css';
import Languagesrow from "../languagesrow/Languagesrow";

function Content(){
    const [ismovie,setBanner]=useState(MoviesData[0])
    const changeBanner=(url)=>
       {
           setBanner(url)
       }
    return (
     
        <div className="banner">
            <Header changeBanner={changeBanner} movie={ismovie}/>
            <div className="shadow"></div>
            <div className="rows" >
                <Row rowName="Latest Shows" apiUrl="https://api.sampleapis.com/movies/family"  smallRow={false}  changeBanner={changeBanner}/>
                <Companies />
                <Row rowName="Western" apiUrl="https://api.sampleapis.com/movies/western" smallRow={true}  changeBanner={changeBanner}/>
                
                <Row rowName="Classic" apiUrl="https://api.sampleapis.com/movies/classic" smallRow={false}  changeBanner={changeBanner}/>
                <Languagesrow/>
                <Row rowName="Drama" apiUrl="https://api.sampleapis.com/movies/drama" smallRow={false}  changeBanner={changeBanner}/>
            </div>
            
    </div>
    
    )
}
export default Content