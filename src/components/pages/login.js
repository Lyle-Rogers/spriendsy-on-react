import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            password: "",
            nameInput: "",
            passwordInput: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.intruderCheck = this.intruderCheck.bind(this);
    }

    handleSubmit() {
        if (this.state.id === null) {
            null
        } else {
            if (this.state.id === this.state.nameInput && this.state.password === this.state.passwordInput) {
                this.props.unlockSpriendsy(`${this.state.id}`)
            }
        }

        event.preventDefault(); 
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    intruderCheck() {
        axios.get(`http://localhost:3000/users/${this.state.nameInput}`).then((res) => {
            this.setState({
                id: res.data.id,
                password: res.data.password
            });
        });

        this.handleSubmit();
        event.preventDefault(); 
    }

    //TODO: Fix the sign in error.
    // componentWillUnmount() {
    //     this.setState({
    //         userId: null,
    //         password: "",
    //         nameInput: "",
    //         passwordInput: ""
    //     })
    // }

    render() {
        return (
            <div className="login-container">
                <div className="login-text">
                    <h6 className='penut'>If you want to become a Spriendsy member, forgot your password, or</h6>
                    <h6 className="just-nut">are havig any trouble loging in, please contact me on WhatsApp at</h6>
                    <h6 className="just-a-nut">52 636 698 8561 or Facebook Messenger at lyle.rogers.50</h6>
                </div>
                <form className="login-form" onSubmit={this.intruderCheck}>
                    <div className="login-name">
                        <input 
                            name="nameInput"
                            placeholder="Your user name"
                            maxLength="20"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="login-password">
                        <input 
                            name="passwordInput"
                            placeholder="Password"
                            maxLength="20"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="login-btn" type="submit">
                        <div className="login-btn-text">
                            LOG IN
                        </div>
                        <div className="worship-icon">
                            <FontAwesomeIcon icon="place-of-worship"/>
                        </div>
                    </button>
                </form>
            </div>
        );
    }
}