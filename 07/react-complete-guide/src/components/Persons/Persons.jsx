import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
    }

    /*     shouldComponentUpdate(nextProps, nextState) {
            console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
            return nextProps.persons !== this.props.persons ||
                   nextProps.clicked !== this.props.clicked ||
                   nextProps.changed !== this.props.changed;
            //return true;
        } */

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
    }

    render() {
        console.log('[Persons.js] Inside render()');

        return this.props.persons.map((el, i) => {
            return <Person
                key={el.id}
                name={el.name}
                age={el.age}
                position={i}
                click={() => this.props.clicked(i)}
                changed={(e) => this.props.changed(e, el.id)}
                ref={this.lastPersonRef} />
        });
    }
}

export default Persons;

/* import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map((el, i) =>
        <Person
            key={el.id}
            name={el.name}
            age={el.age}
            click={() => props.clicked(i)}
            changed={(e) => props.changed(e, el.id)} />
    );
};

export default persons; */