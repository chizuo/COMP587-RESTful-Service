const Mapper = require('../defaults/genre');
const num2genre = Mapper.getGenre();

class Movie {
    constructor(movieObj) {
        this.imdbID = movieObj.imdbID;
        this.imdbRating = movieObj.imdbRating;
        this.imdbVoteCount = movieObj.imdbVoteCount;
        this.posterURL = movieObj.posterURLs["original"];
        this.title = movieObj.title;
        this.genres = this.genre(movieObj.genres);
        this.countries = movieObj.countries;
        this.year = movieObj.year;
        this.runtime = movieObj.runtime;
        this.cast = movieObj.cast;
        this.director = movieObj.significants;
        this.overview = movieObj.overview;
        this.tagline = movieObj.tagline;
        this.videoURL = this.streamingURL(movieObj.streamingInfo);
    }

    genre(genrenums) {
        var genres = [];
        for(let i = 0; i < genrenums.length; i++) {
            genres.push(num2genre.get(genrenums[i]));
        }
        return genres;
    }

    streamingURL(streamingInfo) {
        if(streamingInfo.hasOwnProperty('hulu')) { return streamingInfo.hulu.us.link; }
        if(streamingInfo.hasOwnProperty('netflix')) { return streamingInfo.netflix.us.link; }
    }
}

module.exports = Movie;