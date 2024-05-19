import MoviesData from "../Moviesdata";

export const FetchMovies=async(apiURL)=>{
    try{
        if(apiURL){
            const response=await fetch(apiURL);
            const moviedata=await response.json();
            return moviedata
        }
        else{
            return MoviesData
        }
        }
    catch(error){
    console.log('error fetching data',error)

    }
}



export const FetchMovie=async(genre,id)=>{
    const response = await fetch(`https://api.sampleapis.com/movies/${genre}/${id}`);
    if (response.ok) {
    const moviedata = await response.json();
    if (moviedata.posterURL){
            return moviedata
    }else{
            const selectedMovie = MoviesData.find(movie => movie.id === parseInt(id));
            return selectedMovie
        }
    }

}