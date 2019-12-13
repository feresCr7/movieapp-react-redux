import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import uuid from "uuid";
import { connect } from "react-redux";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="movieList">
        {this.props.allState.movies
          .filter(
            el =>
              el.title
                .toLowerCase()
                .indexOf(
                  this.props.allState.filtering.keyword.toLowerCase().trim()
                ) > -1 && el.rating >= this.props.allState.filtering.rating
          )
          .map(el => (
            <MovieCard movie={el} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allState: state.movieReducer
  };
};

export default connect(mapStateToProps)(MovieList);