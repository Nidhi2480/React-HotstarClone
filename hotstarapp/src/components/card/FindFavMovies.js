const FindFavMovies = (FavMovies, id, genre) => {
        console.log(FavMovies)
        const foundMovies = FavMovies.filter(movie => movie.movieid === id && movie.Genre === genre);
        return foundMovies.length > 0;
  };
  
  export default FindFavMovies;