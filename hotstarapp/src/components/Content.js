import React from "react"
import '../styles/style.css';
import trailer from '../media/trailer.mp4'
import Row from "../components/Row"
function Content(){
    return (
        <div className="content">
            <div className="trailer-video">
                <video autoPlay muted loop>
            <source src={trailer}/>
            Your browser does not support the video tag.
            </video></div>
        <Row title="Latest Releases" />
        <Row title="Best in sports" />
        <Row title="Top 10 in India Today - Hindi" />
        <Row title="Popular Shows" />
    </div>
    
    )
}
export default Content