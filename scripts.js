(function(){
    let nubmerOfFilms, lastSeenMovie, rateMovie;
    
    function start() {
        while(nubmerOfFilms == '' || nubmerOfFilms == null || isNaN(nubmerOfFilms)) {
            nubmerOfFilms = +prompt("How many films did you watch?", "");
        }
    }
    start();

    const personalMovieDB = {
        count: nubmerOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

    function userMoviesAndRates(lastMovies) {
        for(let i = 0; i < 2; i++) {
            lastSeenMovie = prompt("What was the last movie you saw?", "None");
            rateMovie     = +prompt("Rate last movie you saw.", ""); 

            if(lastSeenMovie == "" || rateMovie == "" || lastSeenMovie == null || rateMovie == null || lastSeenMovie.length > 50 || isNaN(rateMovie)) {
                i--;    
            } else {   
                lastMovies[lastSeenMovie] = rateMovie;
            }
        }
    }
    userMoviesAndRates(personalMovieDB.movies);

    function userMovieStatus(count) {
        if(count < 10) {
            alert("You watched just a few movies.");
        } else if(10 <= count && count < 30) {
            alert("You are ordinary viewer.");
        } else if(count >= 30) {
            alert("You are movie fan.");
        } else {
            alert("Error.");
        }
    }
    userMovieStatus(personalMovieDB.count);

    function showUserDB(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log("Movie DataBase is privat.");
        }
    }
    showUserDB(personalMovieDB.privat);

    function writeYourGenres(genres) {
        for(let i = 0; i < 3; i++) {
            const userGenre = prompt(`You favorite genre on ${i+1} place`, "");
            genres[i] = userGenre;
        }
    }
    writeYourGenres(personalMovieDB.genres);

}());