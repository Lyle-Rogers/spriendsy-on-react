import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import axios from 'axios';

export default class Friends extends Component {
    constructor() {
        super();

        this.state = {
            name: "", 
            inLebaron: false,
            friendly: false,
            business: "",
            about: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/users/1").then((res) => {
            this.setState({
                friendly: res.data.friendly,
                inLebaron: res.data.inLebaron,
                name: res.data.name,
                business: res.data.business,
                about: res.data.about
            });
        });
    }

    render() {
        return (
            <div className="friends-wrapper">
                <div className="top-column">
                    <div className="activity-container">
                        <div className="activity-description">
                            <div className="leb-activity">
                                <h4>In Lebaron:</h4>
                                <FontAwesomeIcon icon="jedi" />
                            </div>
                            <div className="friendly-activity">
                                <h4>Friendly:</h4>
                                <FontAwesomeIcon icon="jedi" />
                            </div>
                        </div>
                    </div>
                    <div className="header">
                        <h2>FRIENDS</h2>
                    </div>
                    <div className="user-edit-container">
                        <div className="user-edit">
                            <NavLink to="/user-profile" activeClassName="nav-link-active">
                                <FontAwesomeIcon icon="user-edit"/>
                            </NavLink>
                            <div className="your-name">
                            <h6>{this.state.name}</h6>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="bottom-column">
                    <div className='left-side'>
                        <div className="buisiness-textarea">
                            <h4>BUISINESS</h4>
                            <textarea
                                placeholder="This person doesn't have their business set up yet." 
                                readOnly
                                value={this.state.business}
                            />
                        </div>
                        <div className="about-textarea">
                            <h4>ABOUT</h4>
                            <textarea 
                                placeholder="This person has nothing to say about themself." 
                                readOnly
                                value={this.state.about}
                            />
                        </div>
                    </div>
                    <div className="right-side">

                    </div>
                </div>
            </div>
        )
    }
}