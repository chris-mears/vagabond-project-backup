import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './components/Home/Home'
import NavBar from './components/BoilerPlate/NavBar'
import Header from './components/BoilerPlate/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
