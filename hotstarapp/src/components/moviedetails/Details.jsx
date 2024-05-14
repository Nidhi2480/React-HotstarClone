import React from "react";
import Row from "../movielistrow/Row"
import "./details.css";

function Details({ genre }) {
  return (
    <>
      <div className="headings">
        <h1>Movies Like This</h1>
        <h1>Trailers & More</h1>

      </div>
      <hr />

      <Row apiUrl={`https://api.sampleapis.com/movies/${genre==='latestshows'?'drama':genre}`} smallRow={false} genre={`${genre==='latestshows'?'drama':genre}`}/>
        

      </>
  );
}

export default Details;
