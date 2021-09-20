(function(){
    const nubmerOfFilms = prompt("How many films did you watch?", "0"),
          lastSeenMovie = prompt("What was the last movie you saw?", "None"),
          rateMovie     = prompt("Rate last movie you saw.", "0");
    
    const personalMovieDB = {
        count: nubmerOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

    personalMovieDB.movies[lastSeenMovie] = rateMovie;

    console.log(personalMovieDB.movies);
}());