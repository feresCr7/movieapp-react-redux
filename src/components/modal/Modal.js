  
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { addMovie, editMovie } from "../../actions/actions";
import uuid from "uuid";

class ModalMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  componentDidMount = () => {
    this.setState({
      ...this.state,
      ...this.props.movieToUpdate
    });
  };
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addNewMovie = () => {
    this.props.add({ ...this.state, id: uuid() });
    this.setState({
      show: false
    });
  };
  editFilm = () => {
    this.props.edit(this.state);
    this.setState({
      show: false
    });
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.editValue ? "Edit Movie" : "Add New Movie"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="title"
                  value={this.state.title}
                />
              </div>
              <div>
                <label>Image:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="image"
                  value={this.state.image}
                />
              </div>
              <div>
                <label>Rating:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="rating"
                  value={this.state.rating}
                />
              </div>
              <div>
                <label>Year:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="year"
                  value={this.state.year}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button
              onClick={this.props.editValue ? this.editFilm : this.addNewMovie}
              variant="primary"
            >
              {this.props.editValue ? "Edit Movie" : "Add Movie"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: newMovie => dispatch(addMovie(newMovie)),
    edit: updatedMovie => dispatch(editMovie(updatedMovie))
  };
};

export default connect(null, mapDispatchToProps)(ModalMovie);