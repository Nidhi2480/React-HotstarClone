import React from "react"
import '../styles/banner.css';
import Row from "../components/Row"
import Trailer from "../components/Trailer"
import TrailerDesc from "./TrailerDesc";
function Content(){
    return (
        <div className="banner">
            <Trailer />
            <TrailerDesc />
            <div className="shadow"></div>
            <div className="rows">
                
                <Row />
                <Row />
            </div>
    </div>
    
    )
}
export default Content