import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { filter } from "../../actions/actions";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      keyword: ""
    };
  }
  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue }, () =>
      this.props.filterFun(this.state)
    );
  };
  handleChange = e => {
    this.setState(
      {
        keyword: e.target.value
      },
      () => this.props.filterFun(this.state)
    );
  };
  render() {
    return (
      <Form>
        <Form.Control
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
        />
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </Form>
    );
  }
}

const mapDispatchToprops = dispatch => {
  return {
    filterFun: filteringData => dispatch(filter(filteringData))
  };
};

export default connect(null, mapDispatchToprops)(Filter);