import React, { Component } from 'react'
import './styles.css';

class SignIn extends Component {

    componentDidMount = () => {
        console.log("COMPONENT DID MOUNT")
    }

    componentWillUnmount = () => {
        console.log("componentWillUnMount")
    }

    shouldComponentUpdate = (nextProp, nextState) => {
        console.log('this.shouldComponentUpdate')
        return true;
    }

    state = {
        username: '',
        password: '',
        termsCheck: false,
        errors: {}
    }

    onTextInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        })
    }
 
    onCheckboxChange = (e) => {
        this.setState({
            ...this.state,
            termsCheck: e.target.checked
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        let error = {}
        let isValid = true;
        if(this.state.username === ''){
            error.username = 'Username is required.'
            isValid = false
        }
        if(this.state.password === ''){
            error.password = 'Password is required.'
            isValid = false
        }

        if(!isValid){
            this.setState({
                errors: error
            })
        } else {
            console.log("FORM SUBMITTED SUCCESSFULLY", this.state)
            this.setState({
                errors: {}
            })
        }
    }

    render() {
        console.log('render')
        return (
            <div className="wrapper">
                <div className="form-container">
                    <form onSubmit={this.handleFormSubmit} >
                        <h2>Login</h2>
                        <div className="form-control">
                            <label>Username</label>
                            <input type="text" name="username" value={this.state.username} onChange={this.onTextInputChange} />
                            <span className="error-text"> {this.state.errors.username} </span>
                        </div>
                        <div className="form-control">
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.onTextInputChange} />
                            <span className="error-text"> {this.state.errors.password} </span>
                        </div>
                        <div className="form-checkbox">
                            <input type="checkbox" name="termsCheck" value={this.state.termsCheck} checked={this.state.termsCheck} onChange={this.onCheckboxChange} />
                            <label>Accept terms and conditions.</label>
                        </div>

                        <button type="submit" disabled={!this.state.termsCheck} className={`btn ${this.state.termsCheck ? 'btn-secondary' : 'btn-disabled'}`}>Signin</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignIn

