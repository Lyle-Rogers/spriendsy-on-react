import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RedIcon(props) {
    return (
        <div className="red-icon">
            <a onClick={props.onClick}>
                <FontAwesomeIcon icon="jedi" />
            </a>
        </div>
    )
}

function GreenIcon(props) {
    return (
        <div className="green-icon">
            <a onClick={props.onClick}>
                <FontAwesomeIcon icon="jedi" />
            </a>
        </div>
    )
}

export default class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            contactInfo: "",
            friendly: false,
            inLebaron: false,
            business: "",
            about: ""
        }
        this.lebButtonClick = this.lebButtonClick.bind(this);
        this.friendlyButtonClick = this.friendlyButtonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        axios.patch(`http://localhost:3000/users/${this.state.userId}`, {
            contactInfo: this.state.contactInfo,
            friendly: this.state.friendly,
            inLebaron: this.state.inLebaron,
            business: this.state.business,
            about: this.state.about
        })

        event.preventDefault();
        this.props.history.push("/friends");
    }

    lebButtonClick() {
        if (this.state.inLebaron === false) {
            this.setState({
                inLebaron: true
            })
        }

        if (this.state.inLebaron === true) {
            this.setState({
                inLebaron: false
            })
        }
    }

    friendlyButtonClick() {
        if (this.state.friendly === false) {
            this.setState({
                friendly: true
            })
        }

        if (this.state.friendly === true) {
            this.setState({
                friendly: false
            })
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/users/${this.state.userId}`).then((res) => {
            this.setState({
                contactInfo: res.data.contactInfo,
                friendly: res.data.friendly,
                inLebaron: res.data.inLebaron,
                business: res.data.business,
                about: res.data.about
            });
        });
    }

    render() {
        let theId = this.props.theId;
        this.state.userId = theId;

        let lebButton;
        let friendlyButton;

        if (this.state.inLebaron === false) {
            lebButton = <RedIcon onClick={this.lebButtonClick} />;
        } else {
            lebButton = <GreenIcon onClick={this.lebButtonClick} />;
        }

        if (this.state.friendly === false) {
            friendlyButton = <RedIcon onClick={this.friendlyButtonClick} />;
        } else {
            friendlyButton = <GreenIcon onClick={this.friendlyButtonClick} />;
        }

        return (
            <form onSubmit={this.handleSubmit} className="user-profile-container">
                <div className="signout-container">
                    <a onClick={this.props.signOutClick}>
                        SIGN OUT
                        <FontAwesomeIcon icon="sign-out-alt" />
                    </a>
                </div>
                <div className="contact-info-input">
                    <input
                        name="contactInfo"
                        placeholder="Please give a desired way for Spriendsy members to contact you."
                        value={this.state.contactInfo}
                        onChange={this.handleChange}
                        maxLength="1000"
                    />
                </div>
                <div className="top-of-activity-buttons">
                    <h6 className="penut">Are you looking for new spiritual friends? By submiting that you'r friendly,</h6>
                    <h6 className="just-nut">means you are ok with other people trying to know you or contact you.</h6>
                </div>
                <div className="avtivity-buttons">
                    <div className="leb-button">
                        <h4>In Lebaron:</h4>
                        <div className="leb-icon">
                            {lebButton}
                        </div>
                    </div>
                    <div className="friendly-button">
                        <h4>Friendly:</h4>
                        <div className="friendly-icon">
                            {friendlyButton}
                        </div>
                    </div>
                </div>
                <div className="business-edit-textarea">
                    <h4>BUISINESS</h4>
                    <textarea
                        placeholder="Edit your business"
                        name="business"
                        value={this.state.business}
                        maxLength="9721"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="about-edit-textarea">
                    <h4>ABOUT</h4>
                    <textarea
                        placeholder="Edit your about status"
                        name="about"
                        value={this.state.about}
                        maxLength="9721"
                        onChange={this.handleChange}
                    />
                </div>
                <button className="save-btn" type="submit">
                    <div className="save-button-text">
                        SAVE
                    </div>
                    <div className="worship-icon">
                        <FontAwesomeIcon icon="place-of-worship" />
                    </div>
                </button>
            </form>
        );
    }
}



