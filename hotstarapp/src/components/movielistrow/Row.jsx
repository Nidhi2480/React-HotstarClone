import React, { useState, useEffect ,useRef} from 'react';
import "./rowstyle.css"
import Card from "../card/Card"
export default function App({rowName,apiUrl,smallRow}) {
  const [data, setData] = useState([]);
  const [iscardHovered, setcardHovered] = useState(false);
  
  const [isNavHovered,setNavHovered]=useState(false);

  const rowContentRef =useRef(null)
 

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(apiUrl);
        const json = await resp.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    getData();
  }, [apiUrl]);

  const handleMouseEnter = () => {

      setcardHovered(true);
  
  };

  const handleMouseLeave = () => {
    setcardHovered(false);
  };

  const scroll = (offset) => {
    if (rowContentRef.current) {
      rowContentRef.current.scrollLeft += offset;
    }
  };
  const handleMouseEnterNav = () => {
      setNavHovered(true);
   
  
  };

  const handleMouseLeaveNav = () => {
    setTimeout(()=>{
      setNavHovered(false);
    },200)
    
  };
  return (
    <>
    <h2 style={{ color: 'white',marginLeft:`15.6vb` }}>{rowName}</h2>
    <div className='row-movies' onMouseEnter={handleMouseEnterNav}   onMouseLeave={handleMouseLeaveNav} >
     
      <div className={`row-contents${iscardHovered? 'hide-x':''}`} ref={rowContentRef} >
        {data.slice(10,).map((movie, _) => (
      
            <Card movie={movie} smallRow={smallRow} onMouseEnter={handleMouseEnter}   onMouseLeave={handleMouseLeave}/>
          
        ))}
         
      </div>
      {isNavHovered && !iscardHovered &&(
      <button className="scroll-right" id="scrollRight" onClick={() => scroll(1000)}>{">"}</button>
 
      )}
       {isNavHovered &&  !iscardHovered &&(
     
      <button className="scroll-left" id="scrollLeft" onClick={() => scroll(-1000)}>{"<"}</button>
      )}
       {/* {isNavHovered && hoveredMovie && <Card movie={hoveredMovie}/>} */}
      
    </div></>
  );
}
