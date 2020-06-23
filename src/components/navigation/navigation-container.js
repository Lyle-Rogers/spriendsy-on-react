import React from "react"; 
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
    return (
        <div className="nav-wrapper">
            <div className="top-side">
                <div className="spriendsy">
                    <h1>Spriendsy</h1>
                </div>
            </div>
            <div className="bottom-side">
                <div className="nav-link-wrapper-1">
                    <NavLink exact to="/"activeClassName="nav-link-active">
                        FORUM
                    </NavLink>
                </div>
                <div className="nav-link-wrapper-2">
                    <NavLink to="/friends" activeClassName="nav-link-active">
                        FRIENDS
                    </NavLink>
                </div>
                <div className="nav-link-wrapper-3">
                    <NavLink to="/archive" activeClassName="nav-link-active">
                        ARCHIVE
                    </NavLink>
                </div> 
            </div>
        </div>
    )
}

export default withRouter(NavigationComponent);