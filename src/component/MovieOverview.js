import React from "react";
import MovieCard from "./MovieCard";
import logoIcon from "../image/loadingIcon.png";

class MovieOverview extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            movieLoaded: false,
            movies: [],
            movie: null
        }
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=d7a26a70&s=superhero")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    movies: result.Search
                })
            });
    }

    render() {
        const {isLoaded, movies, movie} = this.state;
        if (!isLoaded) {
            return (<div>loading...</div>);
        } else {
            return (
                <div>
                    <div className="container">
                        {movies.map(movieToShow => (
                            <MovieCard movie={movieToShow}/>
                        ))}
                    </div>
                    <div className="loadMore">
                        <div className="opacity"></div>
                        <img src={logoIcon} alt="loading icon"/><p>Load more</p>
                    </div>
                </div>
            );
        }
    }
}
export default MovieOverview;