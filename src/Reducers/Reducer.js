import uuid from "uuid";
import {ADD_MOVIE,REMOVE_MOVIE,EDIT_MOVIE,FILTER} from "../actions/types";

let initialState = [
  {
    id: uuid(),
    title: "Parasite",
    image:
      "https://static.cinebel.be/img/movie/poster/full/1020491_fr_parasite_1563531796112.jpg",
    year: 2019,
    rating: 5,
    description:
    "Parasyte (Japanese: 寄生獣 Hepburn: Kiseijū, lit. Parasitic Beasts) is a science fiction horror manga series written and illustrated by Hitoshi Iwaaki and published in Kodansha's Afternoon magazine from 1988 to 1995. The manga was published in North America by first Tokyopop, then Del Rey, and finally Kodansha Comics.The manga has been adapted into two live-action films in Japan in 2014 and 2015. An anime television series adaptation by Madhouse, titled Parasyte -the maxim- (寄生獣 セイの格率 Kiseijū Sei no Kakuritsu), aired in Japan between October 2014 and March 2015. The English-language dub aired on Adult Swim's Toonami block in America between October 2015 and April 2016.Parasyte won the Kodansha Manga Award for the general category in 1993 and the Seiun Award for best manga in 1996. As of October 2014, the manga had over 11 million copies in print."
  },
  {
    id: uuid(),
    title: "Interstellar",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    year: 2014,
    rating: 4,
    description:
    "Interstellar (film) Interstellar is an upcoming 2014 science fiction film directed by Christopher Nolan . Starring Matt Damon, Anne Hathaway , Emily Blunt , and Michael Caine , the film features a team of space travelers who travel through a wormhole into another dimension."
  },
  {
    id: uuid(),
    title: "Joker",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    year: 2019,
    rating: 3,
    description:
    "The Joker is a serial killer and a super-villain, a dangerous madman who dresses like a clown and commits violent crimes. He is often recognized as Batman's greatest enemy, living in and terrorizing Gotham City, although he spends most of his time in Arkham Asylum."

    
  }
];
const movieReducer  = (state = { movies: initialState, filtering: { keyword: "", rating: 1 } }, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(el =>
          el.id === action.payload ? false : true
        )
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === action.payload.id ? action.payload : el
        )
      };
      case FILTER:
        return {
          ...state,
          filtering: {
            keyword: action.payload.keyword,
            rating: action.payload.rating
          }
        };
      default:
        return state;
  }
};

export default movieReducer;
