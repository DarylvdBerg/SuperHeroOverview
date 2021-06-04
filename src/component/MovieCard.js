import React from "react";

class MovieCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: this.props.movie
        }
    }

    render() {
        const movie = this.state.movie;
        return (
          <div className="movie-container">
              <div className="movie-poster" style={{background: `url(${movie.Poster})`, backgroundSize: "cover"}}>
                  <div className="gradient"></div>
                  <div className="movie-information">
                      <h3>{movie.Title}</h3>
                      <div className="button">
                          <span className="button-information">Details</span>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
export default MovieCard