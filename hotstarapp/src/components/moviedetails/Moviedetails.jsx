import React from "react";
import Header from '../header/Header'
import Details from './Details'
function Moviedetails(changeBanner){
    return(<>
        <Header changeBanner={changeBanner}/>
        <Details /></>
    )
}

export default Moviedetails