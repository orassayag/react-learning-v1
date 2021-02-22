import React, { Component } from 'react';
import './App.css';
import Recpie from './Recpie/Recpie';

class App extends Component {

  state = {
    recpies: [
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

  addRecpieHandler = () => {
    this.setState(
      this.state.recpies.push({
        title: this.state.recpieTitleValue,
        description: this.state.recpieDescriptionValue,
        ingrediencies: this.state.recpieIngredienciesValue.split(','),
        likesCount: 0
      })
    );
    console.log(this.state.recpies);
  };

  render() {
    return (
      <div className="App">
        <div className="add-recpie">
          <input type="text" value={this.state.recpieTitleValue} /><br />
          <input type="text" value={this.state.recpieDescriptionValue} /><br />
          <input type="text" value={this.state.recpieIngredienciesValue} /><br />
          <button onClick={this.addRecpieHandler}>Add recpie!</button>
        </div>

        <Recpie
          title={this.state.recpies[0].title}
          description={this.state.recpies[0].description}
          ingrediencies={this.state.recpies[0].ingrediencies}
          likesCount={this.state.recpies[0].likesCount} />
        <Recpie
          title={this.state.recpies[1].title}
          description={this.state.recpies[1].description}
          ingrediencies={this.state.recpies[1].ingrediencies}
          likesCount={this.state.recpies[1].likesCount} />
        <Recpie
          title={this.state.recpies[1].title}
          description={this.state.recpies[1].description}
          ingrediencies={this.state.recpies[1].ingrediencies}
          likesCount={this.state.recpies[1].likesCount} />
      </div>
    );
  }
}

export default App;