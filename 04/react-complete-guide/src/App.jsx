import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'sdfss', name: 'Max', age: 28 },
      { id: 'ger4r', name: 'Manu', age: 29 },
      { id: 'ger5456r', name: 'Stephanie', age: 26 }
    ],
    otherValue: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((el) => {
      return el.id === id;
    });
    const persons = [...this.state.persons];
    persons[personIndex].name = e.target.value;
    this.setState({ persons: persons });

    /*     const person = {
          ...this.state.persons[personIndex]
        }

        person.name = e.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({ persons: persons }); */

    // const person = Object.assign({}, this.state.persons[personIndex]);
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: '#ffffff',
      font: 'inherit',
      border: '1px solid #0000ff',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((el, i) => {
            return (
              <Person
                name={el.name}
                age={el.age}
                key={el.id}
                click={this.deletePersonHandler.bind(this, i)}
                changed={(e) => this.nameChangedHandler(e, el.id)} />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this works now?'));
  }
}

export default App;

/* {
  this.state.showPersons ?
    <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.togglePersonsHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} />
    </div> : null
} */

/* let persons = null;
if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((el) => {
        return (
          <Person
          name={el.name}
          age={el.age} />
        );
      })}
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.togglePersonsHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} />
    </div>
  );
} */

/* switchNameHandler = (newName) => {
  // console.log('Was clicked');
  // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  this.setState({
    persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ]
  });
};
 */