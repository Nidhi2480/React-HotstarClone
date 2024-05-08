import React from "react"
import Trailer from "../banner/Trailer"
import TrailerDesc from "../bannerdesc/TrailerDesc";


function Header({changeBanner,movie}){
    
   

   
    return (
        <>
         <Trailer movie={movie}/> 
        <TrailerDesc changebanner={changeBanner} movie={movie}/>   
        </>

    )
}

export default Header;