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
        ingrediencies: ['3 hot water', '1 black peper', '2 peperoni cheese'],
        likesCount: 0
      },
      {
        id: 3,
        title: 'Double hamburger',
        description: 'Double hamburger Double hamburger Double hamburger Double hamburger Double hamburger Double hamburger',
        ingrediencies: ['1 meat stake', '1 lyes of hasa', '1 onuion'],
        likesCount: 0
      },
    ],
    showrecipes: false
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
    const recipes = [...this.state.recipes];
    recipes[recipes.findIndex(el => el.id === id)].likesCount++;
    this.setState({ recipes: recipes });
  };

  deleteRecipeHandler = (id) => {
    const recipes = [...this.state.recipes];
    recipes.splice([recipes.findIndex(el => el.id === id)], 1);
    this.setState({ recipes: recipes });
  };

  togglerecipesHandler = () => {
    const doesShow = this.state.showrecipes;
    this.setState({ showrecipes: !doesShow });
  }

  titleChangedHandler = (e, id) => {
    const recipes = [...this.state.recipes];
    recipes[recipes.findIndex(el => el.id === id)].title = e.target.value;
    this.setState({ recipes: recipes });
  };

  descriptionChangedHandler = (e, id) => {
    const recipes = [...this.state.recipes];
    recipes[recipes.findIndex(el => el.id === id)].description = e.target.value;
    this.setState({ recipes: recipes });
  };

  renderRecipeHandler = (recipe) => {
    return (
      <Recipe
        key={recipe.id}
        title={recipe.title}
        description={recipe.description}
        ingrediencies={recipe.ingrediencies}
        likesCount={recipe.likesCount}
        likeRecipe={this.likeRecipeHandler.bind(this, recipe.id)}
        delete={this.deleteRecipeHandler.bind(this, recipe.id)}
        titleChange={(e) => this.titleChangedHandler(e, recipe.id)}
        descriptionChange={(e) => this.descriptionChangedHandler(e, recipe.id)} />
    );
  };

  render() {

    let recipes = null;
    if (this.state.showrecipes) {
      recipes = this.state.recipes.map((el) => {
        return this.renderRecipeHandler(el);
      });
    }

    return (
      <div className="App">
        <div className="add-recipe">
          Title: <input type="text" value={this.state.title || ''} onChange={this.titleChangeHandler} /><br />
          Description: <input type="text" value={this.state.description || ''} onChange={this.descriptionChangeHandler} /><br />
          Ingrediencies: <input type="text" value={this.state.ingrediencies || ''} onChange={this.ingredienciesChangeHandler} /><br />
          <button onClick={this.addRecipeHandler}>Add recipe!</button><br />
          <button onClick={this.togglerecipesHandler}>Show recipes</button>
        </div>
        <div>
          {recipes}
        </div>
      </div>
    );
  }
}

export default App;

/* <Recipe
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
likeRecipe={this.likeRecipeHandler.bind(this, this.state.recipes[2].id)} /> */