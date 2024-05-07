import React from "react"
import Row from "../movielistrow/Row"
import Header from "../header/Header"
import Companies from "../companiesrow/Companies";
import Languagesrow from "../languagesrow/Languagesrow";
import './contents.css';

function Content({changeBanner,isbanner}){
    return (
     
        <div className="banner">
            <Header changeBanner={changeBanner} movie={isbanner}/>
            <div className="shadow"></div>
            <div className="rows" >
                <Row rowName="Latest Shows" apiUrl=""  smallRow={false}  changeBanner={changeBanner}/>
                <Row rowName="Family" apiUrl="https://api.sampleapis.com/movies/family"  smallRow={false}  changeBanner={changeBanner} genre="family"/>
                <Companies />
                <Row rowName="Western" apiUrl="https://api.sampleapis.com/movies/western" smallRow={true}  changeBanner={changeBanner} genre="western"/>
                <Row rowName="Classic" apiUrl="https://api.sampleapis.com/movies/classic" smallRow={false}  changeBanner={changeBanner} genre="classic"/>
                <Languagesrow/>
                <Row rowName="Drama" apiUrl="https://api.sampleapis.com/movies/drama" smallRow={false}  changeBanner={changeBanner} genre="drama"/>
            </div>
            
    </div>
    
    )
}
export default Content