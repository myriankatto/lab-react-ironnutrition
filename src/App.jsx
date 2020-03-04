import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import meals from './meals.json';

import MealBox from './components/MealBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: meals,
      active: false
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.addMeal = this.addMeal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
  }

  toggleForm() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }

  addMeal(event) {
    event.preventDefault();
    this.toggleForm();
    const data = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    this.setState(previousState => ({
      meals: [...previousState.meals, data]
    }));
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });

    // console.log(inputName, value);
  }

  handleInputSearch(event) {
    const value = event.target.value.toLowerCase();
    // console.log(value);

    const filteredMeals = meals.filter(meal => {
     return  meal.name.toLowerCase() === value;
    });

    // console.log(filteredMeals);

    this.setState({
      meals: filteredMeals
    });
  }

  render() {
    const meals = this.state.meals;
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleInputSearch}
        />

        {meals.map(meal => (
          <MealBox key={meal.image} {...meal} />
        ))}
        <button onClick={this.toggleForm}>New Meal</button>
        {this.state.active && (
          <form onSubmit={this.addMeal}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              placeholder="Calories"
              name="calories"
              value={this.state.calories}
              onChange={this.handleInputChange}
            />
            <input
              type="file"
              placeholder="Image"
              name="image"
              value={this.state.image}
              onChange={this.handleInputChange}
            />
            <button>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default App;
