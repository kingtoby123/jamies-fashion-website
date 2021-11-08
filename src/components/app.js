import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/home';
import Contact from './pages/contact';
import Login from './pages/login'
import Shop from './pages/shop';
import About from './pages/about';
import CreateAccount from './pages/create-account';
import DropDownMenu from './navigation/dropDownMenu';

import Navigation from './navigation/navigation';

// import Navigation from './navigation/navigation';
import Footer from './navigation/footer';
import ForgotPassword from './pages/forgot-password';





export default class App extends Component {
  render() {
    return (
      <div className='app'>

          <Router>
            <DropDownMenu/>
            <Navigation/>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/shop" component={Shop} />
              <Route path="/about" component={About} />
              <Route path="/create-account" component={CreateAccount} />
              <Route path="/forgot-password" component={ForgotPassword} />



            </Switch>
            <Footer/>
          </Router>

        
      </div>

        
    );
  }
}



