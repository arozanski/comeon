import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Icon from '../../components/UI/Icon/Icon';
import axios from '../../axios-instance';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Login extends Component {
    constructor () {
        super();

        this.state = {
            loginForm : {
                username: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Username'
                    },
                    iconName: 'user',
                    value: '',
                    rules: {
                        required: true,
                        minLength: 4
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
                    },
                    iconName: 'lock',
                    value: '',
                    rules: {
                        required: true,
                        minLength: 3,
                        maxLength: 10
                    },
                    valid: false,
                    touched: false
                },
                submit: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'submit'
                    },
                    iconName: 'right chevron',
                    value: 'Login',
                    rules: {},
                    valid: true,
                    touched: false
                }
            },
            formIsValid: false,
            failedAttempt: false
        }
    }

    checkRules (value, rules) {
        let valid = true;

        if (rules.required) {
            valid = value.trim() !== '' && valid;
        }

        if (rules.minLength) {
            valid = value.length >= rules.minLength && valid;
        }

        if (rules.maxLength) {
            valid = value.length <= rules.maxLength && valid;
        }

        return valid;
    }

    loginHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const formData = {};

        for (let key in this.state.loginForm) {
            let value = this.state.loginForm[key].value;

            if (value !== 'Login') {
                formData[key] = value;
            }
        }

        axios.post('/login', formData)
            .then(response => {
                this.displayInvalidAttempt(false);
                this.props.onLogin(true, response.data.player, formData.username);
                this.props.history.push('/main');
            })
            .catch(error => {
                this.displayInvalidAttempt(true);
                this.props.onLogin(false);
            });
    }

    displayInvalidAttempt = (state) => {
        this.setState({failedAttempt: state});
    }

    onChangeHandler = (event, elementId) => {
        const formData = {...this.state.loginForm};
        const elementData = {...formData[elementId]};

        elementData.value = event.target.value;
        elementData.valid = this.checkRules(elementData.value, elementData.rules);
        elementData.touched = true;
        formData[elementId] = elementData;

        let formIsValid = true;

        for (let input in formData) {
            formIsValid = formData[input].valid && formIsValid;
        }

        this.displayInvalidAttempt(false);
        this.setState({loginForm: formData, formIsValid}); 
    }

    render () {
        const formElements = [];
        const errorMsg = this.state.failedAttempt ? 
            <a className="ui red label" href="/">Invalid username and/or password</a> : null;

        for (let key in this.state.loginForm) {
            formElements.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
        return (
            <div className="login">
                <div className="ui grid centered">
                    {errorMsg}
                    <form onSubmit={this.loginHandler}>
                        <div className="fields">
                            {formElements.map(element => (
                                <Input key={element.id} 
                                    elementType={element.config.elementType}
                                    elementConfig={element.config.elementConfig}
                                    value={element.config.value}
                                    invalid={!element.config.valid}
                                    touched={element.config.touched}
                                    required={element.config.required}
                                    shouldValidate={element.config.rules && element.config.rules.required}
                                    change={(event) => this.onChangeHandler(event, element.id)}>
                                    <Icon name={element.config.iconName}/>
                                </Input>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (status, player, username) => dispatch({type: actionTypes.AUTH, status, player, username})
    }
}

export default connect(null, mapDispatchToProps)(Login);