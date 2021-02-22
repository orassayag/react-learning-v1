import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import { AuthContext } from '../../../containers/App';
/* import WithClass from '../../../hoc/WithClass'; */

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {(auth) => auth ? <p>I'm authenticated!</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input ref={this.inputElement} type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);

/* export default Person; */

/* export default withClass(Person, classes.Person); */

/* <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
<p>{this.props.children}</p>
<input ref={(inp) => { this.inputElement = inp }} type="text" onChange={this.props.changed} value={this.props.name} /> */

/* <WithClass classes={classes.Person}>
<p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
<p>{this.props.children}</p>
<input type="text" onChange={this.props.changed} value={this.props.name} />
</WithClass> */

/* <div className={classes.Person}>
<p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
<p>{this.props.children}</p>
<input type="text" onChange={this.props.changed} value={this.props.name} />
</div> */

/* return [
    <p key="1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>,
    <p key="2">{this.props.children}</p>,
    <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
];
 */
/* return (
    <div className={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
    </div>
); */

/* const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;
 */

/* const rnd = Math.random();
if (rnd > 0.7) {
    throw new Error('Something went wrong');
}
 */
/* import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Radium(person); */