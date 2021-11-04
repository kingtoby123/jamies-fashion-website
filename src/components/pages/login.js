import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value})
    } 

    render() {
        return (
            <div className="login-wrapper">

                <div className="login-heading">
                    <div className="login">
                        <h3>Login</h3>
                    </div>
                </div>

                <div className="form-group">
                    <input 
                    type="email" 
                    name = "email"
                    placeholder = "Email"
                    value = {this.state.email}
                    onChange = {this.handleChange}
                    />

                </div>

                <div className="form-group">
                    <input 
                    type="password" 
                    name = "password"
                    placeholder = "Password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    />

                </div>

                
            </div>
        )
    }
}