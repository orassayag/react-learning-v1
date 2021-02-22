import React, { Component } from 'react';
import './App.css';
import Recpie from './Recpie/Recpie';

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
    let recpies = this.state.recpies;
    recpies[recpies.findIndex(el => el.id === id)].likesCount++;
    this.setState({ recpies: recpies });
  }

  render() {
    return (
      <div className="App">
        <div className="add-recpie">
          <input type="text" value={this.state.title || ''} onChange={this.titleChangeHandler} /><br />
          <input type="text" value={this.state.description || ''} onChange={this.descriptionChangeHandler} /><br />
          <input type="text" value={this.state.ingrediencies || ''} onChange={this.ingredienciesChangeHandler} /><br />
          <button onClick={this.addRecpieHandler}>Add recpie!</button>
        </div>

        <Recpie
          title={this.state.recpies[0].title}
          description={this.state.recpies[0].description}
          ingrediencies={this.state.recpies[0].ingrediencies}
          likesCount={this.state.recpies[0].likesCount}
          likeRecpie={this.likeRecpieHandler.bind(this, this.state.recpies[0].id)} />
        <Recpie
          title={this.state.recpies[1].title}
          description={this.state.recpies[1].description}
          ingrediencies={this.state.recpies[1].ingrediencies}
          likesCount={this.state.recpies[1].likesCount}
          likeRecpie={this.likeRecpieHandler.bind(this, this.state.recpies[1].id)} />
        <Recpie
          title={this.state.recpies[2].title}
          description={this.state.recpies[2].description}
          ingrediencies={this.state.recpies[2].ingrediencies}
          likesCount={this.state.recpies[2].likesCount}
          likeRecpie={this.likeRecpieHandler.bind(this, this.state.recpies[2].id)} />
      </div>
    );
  }
}

export default App;