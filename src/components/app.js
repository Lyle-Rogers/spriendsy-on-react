import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Friends from "./pages/friends";
import Forum from "./pages/forum";
import Archive from "./pages/archive";
import Icons from "../helpers/icons";
import UserProfile from "./pages/user-profile";
import Login from "./pages/login";

export default class App extends Component {
  constructor() {
    super();

    Icons();

    this.state = {
      loggedInStatus: "LOGGED_IN"
    }

    this.signOutClick = this.signOutClick.bind(this);
    this.fuckFunction = this.fuckFunction.bind(this);
  }
  
  fuckFunction() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  signOutClick() {
      this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
      })
  }

  render() {
    if (this.state.loggedInStatus === "LOGGED_IN") {
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
              <Route 
                path="/user-profile" 
                render={props => (
                  <UserProfile 
                    {...props}
                    signOutClick={this.signOutClick}
                  />
                )}
              />
            </Switch>
          </Router>
        </div>
      )
    } else {
      return (
        <Login 
          fuckFunction={this.fuckFunction}
        />
      )
    }
  }
}
