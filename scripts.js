(function(){
    const nubmerOfFilms = prompt("How many films did you watch?", "0");
    let    lastSeenMovie, rateMovie;    
    const personalMovieDB = {
        count: nubmerOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

    for(let i = 0; i < 2; i++) {
        lastSeenMovie = prompt("What was the last movie you saw?", "None");
        rateMovie     = prompt("Rate last movie you saw.", "0");
        personalMovieDB.movies[lastSeenMovie] = rateMovie;
    }

    console.log(personalMovieDB.movies);
}());