import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            loading: false
        }

        this.handleChange = this.handleChange.bind(this)
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

                <div className="form-group-wrapper">


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

                <div className="login-button-wrapper">

                    <div className="login-button">
                        <button className = "button" type = "submit" disabled = {this.state.loading}>Sign Up </button>
                    </div>
                    
                </div>

                <div className="hyper-links">
                    <div className="return-to-store">
                        <NavLink to="/shop" activeClassName="nav-link-active">
                            <h3>
                                Return To Store
                                
                            </h3> 
                        </NavLink>
                    </div>

                    <div className="create-account">
                        <NavLink to="/create-account" activeClassName="nav-link-active">
                            <h3>
                                Create Account
                            </h3> 
                        </NavLink>
                    </div>


                    <div className="forgot-password">
                        <NavLink to="/forgot-password" activeClassName="nav-link-active">
                            <h3>
                                Forgot Password
                                
                            </h3> 
                        </NavLink>
                    </div>

                </div>

                
            </div>
        )
    }
}