import React,{useState} from "react"
import Row from "../movielistrow/Row"
import Header from "../header/Header"
import TrailerImage from '../../media/starwarsbanner.webp';
import './contents.css';
function Content(){
    const [isbanner,setBanner]=useState(TrailerImage)
    const changeBanner=(url)=>
       {
           setBanner(url)
       }
    return (
     
        <div className="banner">
            <Header changeBanner={changeBanner} isBanner={isbanner}/>
            <div className="shadow"></div>
            <div className="rows" >
                <Row rowName="Latest Shows" apiUrl="https://api.sampleapis.com/movies/family"  smallRow={false}  changeBanner={changeBanner}/>
                <Row rowName="Western" apiUrl="https://api.sampleapis.com/movies/western" smallRow={true}  changeBanner={changeBanner}/>
                <Row rowName="Classic" apiUrl="https://api.sampleapis.com/movies/classic" smallRow={false}  changeBanner={changeBanner}/>
                <Row rowName="Drama" apiUrl="https://api.sampleapis.com/movies/drama" smallRow={false}  changeBanner={changeBanner}/>
            </div>
            
    </div>
    
    )
}
export default Content