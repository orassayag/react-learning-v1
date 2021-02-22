import React, { Component } from 'react';
import './App.css';
import Recpies from '../components/Recpies/Recpies';
import AddRecpie from '../components/AddRecpie/AddRecpie';

class App extends Component {

  state = {
    recpies: [
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
      }
    ],
    showRecpies: false,
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

  addRecpieHandler = () => {
    const newRecpie = {
      id: this.state.recpies.length + 1,
      title: this.state.title,
      description: this.state.description,
      ingrediencies: this.state.ingrediencies.split(','),
      likesCount: 0
    };
    const recpies = [...this.state.recpies, newRecpie];
    this.setState({ recpies: recpies }, () => {
      console.log(this.state.recpies);
    });
  };

  likeRecpieHandler = (id) => {
    const recpies = [...this.state.recpies];
    recpies[recpies.findIndex(el => el.id === id)].likesCount++;
    this.setState((prevState, props) => {
      return {
        recpies: recpies,
        totalLikes: prevState.totalLikes + 1
      }
    });
  };

  deleteRecpieHandler = (id) => {
    const recpies = [...this.state.recpies];
    recpies.splice([recpies.findIndex(el => el.id === id)], 1);
    this.setState({ recpies: recpies });
  };

  toggleRecpiesHandler = () => {
    const doesShow = this.state.showRecpies;
    this.setState({ showRecpies: !doesShow });
  }

  titleChangedHandler = (e, id) => {
    const recpies = [...this.state.recpies];
    recpies[recpies.findIndex(el => el.id === id)].title = e.target.value;
    this.setState({ recpies: recpies });
  };

  descriptionChangedHandler = (e, id) => {
    const recpies = [...this.state.recpies];
    recpies[recpies.findIndex(el => el.id === id)].description = e.target.value;
    this.setState({ recpies: recpies });
  };

  render() {
    let recpies = null;
    if (this.state.showRecpies) {
      recpies = <Recpies
        recpies={this.state.recpies}
        likeRecpie={this.likeRecpieHandler}
        delete={this.deleteRecpieHandler}
        titleChange={this.titleChangedHandler}
        descriptionChange={this.descriptionChangedHandler} />
    }

    return (
      <div className="App">
        <AddRecpie
          totalLikes={this.state.totalLikes}
          title={this.state.title}
          description={this.state.description}
          ingrediencies={this.state.ingrediencies}
          titleChange={(e) => this.titleChangeHandler(e)}
          descriptionChange={(e) => this.descriptionChangeHandler(e)}
          ingredienciesChange={(e) => this.ingredienciesChangeHandler(e)}
          addRecpie={this.addRecpieHandler}
          toggleRecpies={this.toggleRecpiesHandler}
        />
        {recpies}
      </div>
    );
  }
}

export default App;