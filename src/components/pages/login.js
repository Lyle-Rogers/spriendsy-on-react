import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="login-container">
                <div className="login-text">
                    <h6 className='penut'>If you want to become a Spriendsy member, forgot your password, or</h6>
                    <h6 className="just-nut">are havig any trouble loging in, please contact me on WhatsApp at</h6>
                    <h6 className="just-a-nut">52 636 698 8561 or Facebook Messenger at lyle.rogers.50.</h6>
                </div>
                <div className="login-name">
                    <input 
                        placeholder="Your user name"
                        maxLength="20"
                    />
                </div>
                <div className="login-password">
                    <input 
                        placeholder="Password"
                    />
                </div>
                <button className="login-btn" type="submit" onClick={this.props.fuckFunction}>
                    <div className="login-btn-text">
                        LOG IN
                    </div>
                    <div className="worship-icon">
                        <FontAwesomeIcon icon="place-of-worship"/>
                    </div>
                </button>
            </div>
        );
    }
}