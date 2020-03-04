import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MealBox extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addMeal = this.addMeal.bind(this);
  }

  addMeal() {
    // const meal = {
    //   name,
    //   calories
    // };

    this.setState(previousState => ({
      timestamps: [...previousState.meals]
    }));
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  }

  render() {
    //console.log(this.props);
    return (
      <div className="media">
        <img
          src={this.props.image}
          alt={this.props.name}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '4em' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.props.name}</h5>
          <small>{this.props.calories}</small>
        </div>
        <form className="row align-self-center">
          <input
            className="form-control col-9"
            type="number"
            placeholder="0"
            onChange={this.handleInputChange}
          />
          <button onClick={this.addMeal} className="btn btn-primary col-3">
            +
          </button>
        </form>
      </div>
    );
  }
}
export default MealBox;
