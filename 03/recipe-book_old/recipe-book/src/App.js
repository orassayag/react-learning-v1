import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe/Recipe';

class App extends Component {

  state = {
    recipes: [
      {
        title: 'Hot pizza',
        description: 'Text pizza Text pizza Text pizza Text pizza Text pizza Text pizza Text pizza Text pizza',
        ingrediencies: ['1 cup of sushi', '2 cups of rice', '1 grice orange'],
        likesCount: 0
      },
      {
        title: 'Pasta napolitana',
        description: 'Pasta napolitana Pasta napolitana Pasta napolitana Pasta napolitana Pasta napolitana Pasta napolitana',
        ingrediencies: ['3 hot water', '1 black peper', '2 peperoni cheese'],
        likesCount: 0
      },
      {
        title: 'Double hamburger',
        description: 'Double hamburger Double hamburger Double hamburger Double hamburger Double hamburger Double hamburger',
        ingrediencies: ['1 meat stake', '1 lyes of hasa', '1 onuion'],
        likesCount: 0
      },
    ]
  };

  addRecipeHandler = () => {
    this.setState(
      this.state.recipes.push({
        title: this.state.recipeTitleValue,
        description: this.state.recipeDescriptionValue,
        ingrediencies: this.state.recipeIngredienciesValue.split(','),
        likesCount: 0
      })
    );
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <div className="add-recipe">
          <input type="text" value={this.state.recipeTitleValue} /><br />
          <input type="text" value={this.state.recipeDescriptionValue} /><br />
          <input type="text" value={this.state.recipeIngredienciesValue} /><br />
          <button onClick={this.addRecipeHandler}>Add recipe!</button>
        </div>

        <Recipe
          title={this.state.recipes[0].title}
          description={this.state.recipes[0].description}
          ingrediencies={this.state.recipes[0].ingrediencies}
          likesCount={this.state.recipes[0].likesCount} />
        <Recipe
          title={this.state.recipes[1].title}
          description={this.state.recipes[1].description}
          ingrediencies={this.state.recipes[1].ingrediencies}
          likesCount={this.state.recipes[1].likesCount} />
        <Recipe
          title={this.state.recipes[1].title}
          description={this.state.recipes[1].description}
          ingrediencies={this.state.recipes[1].ingrediencies}
          likesCount={this.state.recipes[1].likesCount} />
      </div>
    );
  }
}

export default App;