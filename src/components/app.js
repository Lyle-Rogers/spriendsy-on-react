import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Friends from "./pages/friends";
import Forum from "./pages/forum";
import Archive from "./pages/archive";
import Icons from "../helpers/icons";
import UserProfile from "./pages/user-profile";

export default class App extends Component {
  constructor() {
    super();

    Icons();
  }
  
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />
          </div>
          <Switch>
            <Route exact path="/" component={Forum} />
            <Route path="/friends" component={Friends} />
            <Route path="/archive" component={Archive} />
            <Route path="/user-profile" component={UserProfile} />
          </Switch>
        </Router>
      </div>
    );
  }
}
