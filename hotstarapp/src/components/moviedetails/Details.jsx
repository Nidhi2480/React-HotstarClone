import React, { useEffect, useState } from "react";
import "./details.css";

function Details({ genre }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const resp = await fetch(`https://api.sampleapis.com/movies/${genre}`);
        if (resp.ok) {
          const json = await resp.json();
          console.log(json)
          setData(json);
        } else {
          throw new Error("Failed to fetch movie");
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    if (genre) {
      fetchMovie();
    }
  }, [genre]);

  return (
    <div className="movie-details">
      <div className="headings">
        <h1>Movies Like This</h1>
        <h1>Trailers & More</h1>
      </div>
      <hr />
    </div>
  );
}

export default Details;
