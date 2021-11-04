import React, { Component } from 'react'

import { NavLink } from "react-router-dom";


export default class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="navigation-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                      <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                      </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                      <NavLink to="/about" activeClassName="nav-link-active">
                        About 
                      </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                      <NavLink to="/contact" activeClassName="nav-link-active">
                        Contact
                      </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                      <NavLink to="/shop" activeClassName="nav-link-active">
                        Shop
                      </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                      <NavLink to="/login" activeClassName="nav-link-active">
                        Login
                      </NavLink>
                    </div>
        
                </div>
            </div>
        )
    }
}