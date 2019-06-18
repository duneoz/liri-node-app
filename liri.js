// read and set any environment variables with the dotenv package
require("dotenv").config();

//import keys.js, store in variable
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

//user inputs
var userOption = process.argv[2];
var inputParameter = process.argv[3];

UserInputs(userOption, inputParameter);

//node commands for LIRI
function UserInputs (userOption, inputParameter){
    switch (userOption) {
    case 'concert-this':
        showConcertInfo(inputParameter);
        break;
    case 'spotify-this-song':
        showSongInfo(inputParameter);
        break;
    case 'movie-this':
        showMovieInfo(inputParameter);
        break;
    case 'do-what-it-says':
        showSomeInfo();
        break;
    default: 
        console.log("Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
}
