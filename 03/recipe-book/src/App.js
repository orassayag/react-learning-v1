import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe/Recipe';

class App extends Component {

  state = {
    recipes: [
      {
        id: 1,
        title: 'Hot pizza',
        description: 'Text pizza Text pizza Text pizza Text pizza Text pizza Text pizza Text pizza Text pizza',
        ingrediencies: ['1 cup of sushi', '2 cups of rice', '1 grice orange'],
        likesCount: 0
      },
      {
        id: 2,
        title: 'Pasta napolitana',
        description: 'Pasta napolitana Pasta napolitana Pasta napolitana Pasta napolitana Pasta napolitana Pasta napolitana',
        ingrediencies: ['3 hot water', '1 black pepper', '2 pepperoni cheese'],
        likesCount: 0
      },
      {
        id: 3,
        title: 'Double hamburger',
        description: 'Double hamburger Double hamburger Double hamburger Double hamburger Double hamburger Double hamburger',
        ingrediencies: ['1 meat stake', '1 lyes of hasa', '1 onion'],
        likesCount: 0
      },
    ]
  };

  titleChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  };

  descriptionChangeHandler = (e) => {
    this.setState({ description: e.target.value });
  };

  ingredienciesChangeHandler = (e) => {
    this.setState({ ingrediencies: e.target.value });
  };

  addRecipeHandler = () => {
    const newRecipe = {
      id: this.state.recipes.length + 1,
      title: this.state.title,
      description: this.state.description,
      ingrediencies: this.state.ingrediencies.split(','),
      likesCount: 0
    };
    const recipes = [...this.state.recipes, newRecipe];
    this.setState({ recipes: recipes }, () => {
      console.log(this.state.recipes);
    });
  };

  likeRecipeHandler = (id) => {
    let recipes = this.state.recipes;
    recipes[recipes.findIndex(el => el.id === id)].likesCount++;
    this.setState({ recipes: recipes });
  }

  render() {
    return (
      <div className="App">
        <div className="add-recipe">
          <input type="text" value={this.state.title || ''} onChange={this.titleChangeHandler} /><br />
          <input type="text" value={this.state.description || ''} onChange={this.descriptionChangeHandler} /><br />
          <input type="text" value={this.state.ingrediencies || ''} onChange={this.ingredienciesChangeHandler} /><br />
          <button onClick={this.addRecipeHandler}>Add recipe!</button>
        </div>

        <Recipe
          title={this.state.recipes[0].title}
          description={this.state.recipes[0].description}
          ingrediencies={this.state.recipes[0].ingrediencies}
          likesCount={this.state.recipes[0].likesCount}
          likeRecipe={this.likeRecipeHandler.bind(this, this.state.recipes[0].id)} />
        <Recipe
          title={this.state.recipes[1].title}
          description={this.state.recipes[1].description}
          ingrediencies={this.state.recipes[1].ingrediencies}
          likesCount={this.state.recipes[1].likesCount}
          likeRecipe={this.likeRecipeHandler.bind(this, this.state.recipes[1].id)} />
        <Recipe
          title={this.state.recipes[2].title}
          description={this.state.recipes[2].description}
          ingrediencies={this.state.recipes[2].ingrediencies}
          likesCount={this.state.recipes[2].likesCount}
          likeRecipe={this.likeRecipeHandler.bind(this, this.state.recipes[2].id)} />
      </div>
    );
  }
}

export default App;