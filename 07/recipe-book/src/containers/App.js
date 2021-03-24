import React, { Component } from 'react';
import './App.css';
import recipes from '../components/recipes/recipes';
import AddRecipe from '../components/AddRecipe/AddRecipe';

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
      }
    ],
    showrecipes: false,
    totalLikes: 0
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
    this.setState((prevState, props) => {
      return {
        recipes: recipes,
        totalLikes: prevState.totalLikes + 1
      }
    });
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

  render() {
    let recipes = null;
    if (this.state.showrecipes) {
      recipes = <recipes
        recipes={this.state.recipes}
        likeRecipe={this.likeRecipeHandler}
        delete={this.deleteRecipeHandler}
        titleChange={this.titleChangedHandler}
        descriptionChange={this.descriptionChangedHandler} />
    }

    return (
      <div className="App">
        <AddRecipe
          totalLikes={this.state.totalLikes}
          title={this.state.title}
          description={this.state.description}
          ingrediencies={this.state.ingrediencies}
          titleChange={(e) => this.titleChangeHandler(e)}
          descriptionChange={(e) => this.descriptionChangeHandler(e)}
          ingredienciesChange={(e) => this.ingredienciesChangeHandler(e)}
          addRecipe={this.addRecipeHandler}
          togglerecipes={this.togglerecipesHandler}
        />
        {recipes}
      </div>
    );
  }
}

export default App;