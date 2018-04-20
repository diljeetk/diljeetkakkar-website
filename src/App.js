import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavbarComponent} from './components/navbar';
import {CustomCarousel} from './components/customCarousel';
import {landingPage} from './components/landingPage';
import {MyPortfolio} from './components/myPortfolio';
import {WhyMe} from './components/whyMe';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FooterComponent } from './components/footer';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <NavbarComponent/>
        <Route exact path='/' component={landingPage} />
        <Route exact path='/myPortfolio' component={MyPortfolio} />
        <Route exact path='/whyMe' component={WhyMe}/>
        <FooterComponent/>
      </div>
      </Router>
    );
  }
}

export default App;
