import React,{useState} from "react"
import Trailer from "../banner/Trailer"
import TrailerDesc from "../bannerdesc/TrailerDesc";


function Header({changeBanner,movie}){
    const [isMuted, setIsMuted] = useState(false);

    const handleUnmuteClick = () => {
      setIsMuted(!isMuted);
    };
   

   
    return (
        <>
        <Trailer movie={movie} isMuted={isMuted}/> 
        <TrailerDesc changebanner={changeBanner} movie={movie} handleUnmuteClick={handleUnmuteClick}/>   
        </>

    )
}

export default Header;