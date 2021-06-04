import React from "react";
import logo from "../image/DotControl logo_.png";

class MovieHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            movie: null
        }
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=d7a26a70&t=Zack+Snyder's+Justice+League")
            .then(response => response.json())
            .then(result => {
                this.setState({movie: result, isLoaded: true})
            });
    }

    render() {
        const {movie, isLoaded} = this.state;
        console.log(movie);
        if(!isLoaded){
            return <div>Loading...</div>
        } else {
            return(
                <div className="header" style={{backgroundImage: `url(${movie.Poster})`}}>
                    <img src={logo} alt="Dot control logo"/>
                    <div className="gradient"></div>
                    <div className="header-information">
                        <h2>{movie.Title}</h2>
                        <p>{movie.Plot}</p>

                        <div className="button">
                            <span className="button-information">More information</span>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default MovieHeader;