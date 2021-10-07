(function(){
    let lastSeenMovie, rateMovie;
 
    const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function() {
            while(this.count == '' || this.count == null || isNaN(this.count)) {
                this.count = +prompt("How many films did you watch?", "");
            }
        },
        userMoviesAndRates: function(lastMovies) {
            for(let i = 0; i < 2; i++) {
                lastSeenMovie = prompt("What was the last movie you saw?", "None");
                rateMovie     = +prompt("Rate last movie you saw.", ""); 
    
                if(lastSeenMovie == "" || rateMovie == "" || lastSeenMovie == null || rateMovie == null || lastSeenMovie.length > 50 || isNaN(rateMovie)) {
                    i--;    
                } else {   
                    lastMovies[lastSeenMovie] = rateMovie;
                }
            }
        },
        userMovieStatus: function(count) {
            if(count < 10) {
                alert("You watched just a few movies.");
            } else if(10 <= count && count < 30) {
                alert("You are ordinary viewer.");
            } else if(count >= 30) {
                alert("You are movie fan.");
            } else {
                alert("Error.");
            }
        },
        showUserDB: function(hidden) {
            if(!hidden) {
                console.log(this);
            } else {
                console.log("Movie DataBase is privat.");
            }
        },
        toggleVisibleMyDB: function(hidden) {
            if(!hidden) {
                this.privat = true;
            } else {
                this.privat = false;
            }
        },
        writeYourGenres: function(genres) {
            for(let i = 0; i < 3; i++) {
                const userGenre = prompt(`You favorite genre on ${i+1} place`, "");
                if(userGenre == '' || userGenre == null) {
                    i--;
                } else {
                    genres[i] = userGenre;
                }
            }

            personalMovieDB.genres.forEach((item, index) => {
                console.log(`Favorite genre ${index + 1} is - ${item}`);
            });
        }
    };

    personalMovieDB.start(personalMovieDB.count);
    personalMovieDB.userMoviesAndRates(personalMovieDB.movies);
    personalMovieDB.userMovieStatus(personalMovieDB.count);
    personalMovieDB.showUserDB(personalMovieDB.privat);
    personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
    personalMovieDB.writeYourGenres(personalMovieDB.genres);

}());