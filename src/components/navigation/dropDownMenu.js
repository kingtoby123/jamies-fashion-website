import React, { Component } from 'react'

export default class DropDownMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {}

    }
    
    
    // function myFunction(x) {
    //     x.classList.toggle("change");
    //   }
    render() {
        return (
            <div className="menu-wrapper">
                <div className="bar1" ></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                
            </div>
        )
    }
}