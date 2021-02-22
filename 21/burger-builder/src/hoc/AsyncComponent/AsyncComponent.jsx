import React, { Component } from 'react';

const AsyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmd => {
                    this.setState({ component: cmd.default });
                })
                .catch({});
        }

        render() {
            const C = this.state.component;
            return C ? (<C {...this.props} />) : null;
        }
    };
};

export default AsyncComponent;