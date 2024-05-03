import poster1 from "../../media/starwars.webp"
import poster2 from "../../media/starwars.webp"
import poster3 from "../../media/starwars.webp"



const MoviesData = [
    {
      id:1,
      title: "Star Wars",
      logo: "../../media/starwars.webp",
      trailerLink: "../../media/starwars.mp4",
      genre: {
        year:"2019",
        length:"2h 22m" ,
        languages: "4 languages",
        ua:"U/A 13+"},
      poster: poster1,
      description: "Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera  ...",
    },
    {
        id:2,
        title: "Black Panther",
        logo: "../../media/bp.webp",
        trailerLink: "../../media/Marvel Studios' Black Panther - Official Trailer.mp4",
        genre: {
          year:"2018",
          length:"2h 14m" ,
          languages: "4 languages",
          ua:"U/A 13+"},
        poster:poster2,
        description: " Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures",
      },
      {
        id:3,
        title: "Lion King",
        logo: "../../media/lionkinglogo.webp",
        trailerLink: "../../media/The Lion King Official Trailer.mp4",
        genre: {
          year:"2019",
          length:"1h 58m" ,
          languages: "4 languages",
          ua:"U/A 7+"},
        poster: poster3,
        description: "The Lion King is a 2019 American musical drama film directed by Jon Favreau, written by Jeff Nathanson, and produced by Walt Disney Pictures and Fairview Entertainment",
      },
  

   



];
export default MoviesData;