import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export default class CreateAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            comfirmEmail: "",
            password: "",
            comfirmPassword: "",
            loading: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value})
    } 

    render() {
        return (
            <div className="create-account-wrapper">

                <div className="create-account-heading">
                    <div className="create-account">
                        <h3>Create Account</h3>
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


                    <div className="form-group">
                        <input 
                        type="password" 
                        name = "password"
                        placeholder = "Comfirm Email"
                        value = {this.state.comfirmEmail}
                        onChange = {this.handleChange}
                        />

                    </div>


                    <div className="form-group">
                        <input 
                        type="password" 
                        name = "password"
                        placeholder = "Comfirm Password"
                        value = {this.state.comfirmPassword}
                        onChange = {this.handleChange}
                        />

                    </div>

                </div>

                <div className="create-account-button-wrapper">

                    <div className="create-account-button">
                        <button className = "button" type = "submit" disabled = {this.state.loading}>Create Account </button>
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

                    <div className="login">
                        <NavLink to="/login" activeClassName="nav-link-active">
                            <h3>
                                Login

                            </h3> 
                        </NavLink>
                    </div>


                    

                </div>

                
            </div>
        )
    }
}