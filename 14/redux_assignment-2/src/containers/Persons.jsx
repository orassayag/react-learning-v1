import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    personAddedHandler = (props) => {
        console.log();
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: props[0],
            age: Number(props[1])
        };
        this.props.onAddPerson(newPerson);
    }

    render() {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.prs.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={this.props.onDeletePerson.bind(this, person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prs: state.persons
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPerson: (person) => {
            return dispatch({ type: actionTypes.ADD_PERSON, person: person });
        },
        onDeletePerson: (id) => {
            return dispatch({ type: actionTypes.DELETE_PERSON, id: id });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);