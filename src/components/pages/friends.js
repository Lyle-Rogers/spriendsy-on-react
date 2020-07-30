import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import axios from 'axios';

function RedIcon() {
    return (
        <div className="red-icon">
            <FontAwesomeIcon icon="jedi" />
        </div>
    )
}

function GreenIcon() {
    return (
        <div className="green-icon">
            <FontAwesomeIcon icon="jedi" />
        </div>
    )
}

export default class Friends extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            name: "",
            friendly: false,
            inLebaron: false,
            business: "", 
            about: ""
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/users/${this.state.userId}`).then((res) => {
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
        let theId = this.props.theId;
        this.state.userId = theId;

        let lebIcon;
        let friendlyIcon;

        if (this.state.inLebaron === false) {
            lebIcon = <RedIcon />;
        } else {
            lebIcon = <GreenIcon />;
        }

        if (this.state.friendly === false) {
            friendlyIcon = <RedIcon />;
        } else {
            friendlyIcon = <GreenIcon />;
        }

        return (
            <div className="friends-wrapper">
                <div className="top-column">
                    <div className="activity-container">
                        <div className="activity-description">
                            <div className="leb-activity">
                                <h4>In Lebaron:</h4>
                                {lebIcon}
                            </div>
                            <div className="friendly-activity">
                                <h4>Friendly:</h4>
                                {friendlyIcon}
                            </div>
                        </div>
                    </div>
                    <div className="user-edit">
                        <div className="edit-icon-container">
                            <NavLink to="/user-profile" activeClassName="nav-link-active">
                                <FontAwesomeIcon icon="user-edit"/>
                            </NavLink>
                        </div>
                        <div className="user-name">
                            <input 
                                value={this.state.name}
                                readOnly
                            />
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