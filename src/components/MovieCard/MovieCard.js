  
import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import { removeMovie } from "../../actions/actions";
import ModalMovie from "../modal/Modal";
import { Link } from "react-router-dom";

const MovieCard = props => {
  return (
    <div>
      <div className="movie-card">
        <div className="movie-rating">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={props.movie.rating}
          />
        </div>
        <img src={props.movie.image} />
        <div className="movie-description">
          {props.movie.title} <br /> {props.movie.year}
        </div>
      </div>
      <div>
        <button onClick={() => props.remove(props.movie.id)}>remove</button>
        <ModalMovie editValue={true} movieToUpdate={props.movie} />
        <Link to={`/description/${props.movie.id}`}>description</Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeMovie(id))
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);