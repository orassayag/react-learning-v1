import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux';
/* import WithClass from '../hoc/WithClass'; */
/* import ErrorBoundary from './ErrorBoundary/ErrorBoundary'; */
/* import Radium, { StyleRoot } from 'radium'; */

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'sdfss', name: 'Max', age: 28 },
        { id: 'ger4r', name: 'Manu', age: 29 },
        { id: 'ger5456r', name: 'Stephanie', age: 26 }
      ],
      otherValue: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  /*   shouldComponentUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
      //return true;
      return nextState.persons !== this.state.persons ||
             nextState.showPersons !== this.state.showPersons;
    } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps()', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate()');
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  /*   state = {
      persons: [
        { id: 'sdfss', name: 'Max', age: 28 },
        { id: 'ger4r', name: 'Manu', age: 29 },
        { id: 'ger5456r', name: 'Stephanie', age: 26 }
      ],
      otherValue: 'some other value',
      showPersons: false
    }; */

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

  /*   togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState((prevState, props) => {
        return
        {
          showPersons: !doesShow,
          toggleClicked: prevState.toggleClicked + 1
        })
      });
    }; */

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({ showPersons: true }); }}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          login={this.loginHandler}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this works now?'));
  }
}

export default withClass(App, classes.App);

/* <WithClass classes={classes.App}>
<button onClick={() => { this.setState({ showPersons: true }); }}>Show Persons</button>
<Cockpit
  appTitle={this.props.title}
  persons={this.state.persons}
  showPersons={this.state.showPersons}
  clicked={this.togglePersonsHandler} />
{persons}
</WithClass> */

/* <div className={classes.App}>
<button onClick={() => { this.setState({ showPersons: true }); }}>Show Persons</button>
<Cockpit
  appTitle={this.props.title}
  persons={this.state.persons}
  showPersons={this.state.showPersons}
  clicked={this.togglePersonsHandler} />
{persons}
</div>
 */

/* {this.state.persons.map((el, i) => {
  return (
    <Person
      key={el.id}
      name={el.name}
      age={el.age}
      click={this.deletePersonHandler.bind(this, i)}
      changed={(e) => this.nameChangedHandler(e, el.id)} />
  );
})}
 */
/* {/* <ErrorBoundary key={el.id}>
<Person
  name={el.name}
  age={el.age}
  click={this.deletePersonHandler.bind(this, i)}
  changed={(e) => this.nameChangedHandler(e, el.id)} />
</ErrorBoundary> */

/* const style = {
  backgroundColor: 'green',
  color: '#fff',
  font: 'inherit',
  border: '1px solid #0000ff',
  padding: '8px',
  cursor: 'pointer'
}; */

/* {/* <StyleRoot>
<div className="App">
  <h1>Hi, I'm a React App</h1>
  <p className={classes.join(' ')}>This is really working!</p>
  <button
    style={style}
    onClick={this.togglePersonsHandler}>Toggle Persons</button>
  {persons}
</div>
</StyleRoot> */

//export default Radium(App);

/* style[':hover'] = {
  backgroundColor: 'salmon',
  color: 'black'
};

':hover': {
  backgroundColor: 'lightgreen',
  color: 'black'
}
 */

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