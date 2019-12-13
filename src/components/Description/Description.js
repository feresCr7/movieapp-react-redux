import React, { Component } from "react";
import{connect} from "react-redux";
import StarRatingComponent from "react-star-rating-component";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.allState.movies.filter(
        el => el.id === this.props.match.params.id
      )[0]
    };
  }

  render() {
    return (
      <div>
        <div className="movie-card">
          <div className="movie-rating">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.movie.rating}
            />
          </div>
          <img src={this.state.movie.image} />
          <div className="movie-description">
            {this.state.movie.name} <br /> {this.state.movie.year}
          </div>
          <p>{this.state.movie.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allState: state.movieReducer
  };
};

export default connect(mapStateToProps)(Description);