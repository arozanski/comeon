import React, {Component} from 'react';

const asynComponent = (importComponent) => {
    return class extends Component {
        constructor () {
            super();

            this.state = {
                component: null
            }
        }

        componentDidMount () {
            importComponent()
                .then(component => {
                    this.setState({component: component.default})
                })
                .catch(error => console.log(error));
        }

        render () {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asynComponent;
