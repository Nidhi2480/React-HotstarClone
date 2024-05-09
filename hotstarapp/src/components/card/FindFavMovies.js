const FindFavMovies = (FavMovies, id, genre) => {
        const foundMovies = FavMovies.filter(movie => movie.movieid === id && movie.Genre === genre);
        return foundMovies.length > 0;
  };
  
  export default FindFavMovies;