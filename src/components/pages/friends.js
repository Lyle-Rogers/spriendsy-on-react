import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default class Friends extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            inLebaron: false,
            friendly: false,
            buisiness: "flklgjsfklg s ig p[sjg psf gps asdfasdoif asdfa sdf asdf asd f asdf asd f asd fa sdf asd fs df asdf afsd fsf asd fs df asdf asdfasdfas dfsdfa sd f asd f asd fasdf asdfasdf asdfasd fas df asdf asdfasd fas dfasdf asdfasdf as df asdf asd fasdfas dfasdfa sdfasdfasd f asdf as df asd f sdf sad f asd f asdf ",
            about: "",
        }
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
                    <div className="profile-button">
                        <NavLink to="/user-profile" activeClassName="nav-link-active">
                            <i class="fas fa-user-alt"></i>
                        </NavLink>
                    </div>
                </div>
                <div className="bottom-column">
                    <div className='left-side'>
                        <div className="buisiness-textarea">
                            <h4>BUISINESS</h4>
                            <textarea placeholder="Write my buisness message here" readOnly>
                                {this.state.buisiness}
                            </textarea>
                        </div>
                        <div className="about-textarea">
                            <h4>ABOUT</h4>
                            <textarea placeholder="Write my about message here" readOnly>
                                {this.state.about}
                            </textarea>
                        </div>
                    </div>
                    <div className="right-side">

                    </div>
                </div>
            </div>
        )
    }
}