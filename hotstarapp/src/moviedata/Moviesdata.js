import starwarslogo from "../media/starwars.webp"
import blackpantherlogo from "../media/blackpantherlogo.webp"
import lionkinglogo from "../media/lionkinglogo.webp"
import mblogo from "../media/mblogo.webp"
import poster1 from "../media/starwarsbanner.webp"
import poster2 from "../media/bp.webp"
import poster3 from "../media/lion.webp"
import mbposter from "../media/mb.webp"
import starwarstrailer from "../media/starwars.mp4"
import blackpanthertrailer from "../media/Marvel Studios' Black Panther - Official Trailer.mp4"
import lionkingtrailer from "../media/The Lion King Official Trailer.mp4"
import mbtrailer from "../media/mbtrailer.mp4"


const MoviesData = [
    {
      id:1,
      title: "Star Wars",
      logo: starwarslogo,
      trailerLink:starwarstrailer,
      genre: {
        year:"2019",
        length:"2h 22m" ,
        languages: "4 languages",
        ua:"U/A 13+"},
      poster: poster1,
      description: "Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film[a] and quickly became a worldwide pop culture phenomenon.",
    },
    {
        id:2,
        title: "Black Panther",
        logo:  blackpantherlogo,
        trailerLink: blackpanthertrailer,
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
        logo: lionkinglogo,
        trailerLink: lionkingtrailer,
        genre: {
          year:"2019",
          length:"1h 58m" ,
          languages: "4 languages",
          ua:"U/A 7+"},
        poster: poster3,
        description: "The Lion King is a 2019 American musical drama film directed by Jon Favreau, written by Jeff Nathanson, and produced by Walt Disney Pictures and Fairview Entertainment",
      },
      {
        id:4,
        title: "Manjummel Boys",
        logo: mblogo,
        trailerLink: mbtrailer,
        genre: {
          year:"2024",
          length:"2h 15m" ,
          languages: "5 languages",
          ua:"U/A 13+"},
        poster: mbposter,
        description: "Manjummel Boys is a 2024 Indian Malayalam-language survival thriller film written and directed by Chidambaram. It is produced by Soubin Shahir, Babu Shahir and Shawn ... ",
      },

   



];
export default MoviesData;