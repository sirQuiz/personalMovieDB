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
            rateMovie     = prompt("Rate last movie you saw.", "");  
        if(lastSeenMovie == "" || rateMovie == "" || lastSeenMovie == null || rateMovie == null || lastSeenMovie.length > 50) {
            i--;    
        } else {   
            personalMovieDB.movies[lastSeenMovie] = rateMovie;
        }
    }

    if(personalMovieDB.count < 10) {
        alert("You watched just a few movies.");
    } else if(10 <= personalMovieDB.count && personalMovieDB.count < 30) {
        alert("You are ordinary viewer.");
    } else if(personalMovieDB.count >= 30) {
        alert("You are movie fan.");
    } else {
        alert("Error.");
    }

    console.log(personalMovieDB.movies);
}());