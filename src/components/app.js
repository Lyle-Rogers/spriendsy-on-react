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
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      userId: null
    }

    this.signOutClick = this.signOutClick.bind(this);
    this.unlockSpriendsy = this.unlockSpriendsy.bind(this);
  }
  
  unlockSpriendsy(theId) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      userId: theId
    })

    event.preventDefault();  
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
              <Route 
                path="/friends" 
                render={props => (
                  <Friends 
                    {...props}
                    theId={this.state.userId}
                  />
                )} 
              />
              <Route path="/archive" component={Archive} />
              <Route 
                path="/user-profile" 
                render={props => (
                  <UserProfile 
                    {...props}
                    signOutClick={this.signOutClick}
                    theId={this.state.userId}
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
          unlockSpriendsy={this.unlockSpriendsy}
        />
      )
    }
  }
}