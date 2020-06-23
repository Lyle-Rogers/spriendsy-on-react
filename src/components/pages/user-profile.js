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
    constructor() {
        super();

        this.state = {
            name: "",
            friendly: false,
            inLebaron: false,
            business: "",
            about: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.friendlyButtonClick = this.friendlyButtonClick.bind(this);
        this.lebButtonClick = this.lebButtonClick.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.businessChange = this.businessChange.bind(this);
        this.aboutChange = this.aboutChange.bind(this);
    }

    aboutChange(e) {
        axios.patch('http://localhost:3000/users/1', {
            about: e.target.value
        }).then((res) => {
            this.setState({
                about: res.data.value
            })
        })
    }

    businessChange(e) {
        axios.patch('http://localhost:3000/users/1', {
            business: e.target.value
        }).then((res) => {
            this.setState({
                business: res.data.value
            })
        })
    }

    lebButtonClick() {
        if (this.state.inLebaron === false) {
            axios.patch('http://localhost:3000/users/1', {
                inLebaron: true,
            }).then((res) => {
                this.setState({
                    inLebaron: res.data.inLebaron
                })
            })
        } else {
            axios.patch('http://localhost:3000/users/1', {
                inLebaron: false,
            }).then((res) => {
                this.setState({
                    inLebaron: res.data.inLebaron
                })
            })
        }
    }

    friendlyButtonClick() {
        if (this.state.friendly === false) {
            axios.patch('http://localhost:3000/users/1', {
            friendly: true,
            }).then((res) => {
                this.setState({
                    friendly: res.data.friendly
                })
            })
        } else {
            axios.patch('http://localhost:3000/users/1', {
            friendly: false,
            }).then((res) => {
                this.setState({
                    friendly: res.data.friendly
                })
            })
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

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }

    nameChange(e) {
        axios.patch("http://localhost:3000/users/1", {
            name: e.target.value
        }).then((res) => {
            this.setState({
                name: res.data.value
            })
        })
    }     

    render() {
        let lebButton;
        let friendlyButton;

        if (this.state.inLebaron == false) {
            lebButton = <RedIcon onClick={this.lebButtonClick}/>;
        } else {
            lebButton = <GreenIcon onClick={this.lebButtonClick}/>;
        }

        if (this.state.friendly == false) {
            friendlyButton = <RedIcon onClick={this.friendlyButtonClick}/>;
        } else {
            friendlyButton = <GreenIcon onClick={this.friendlyButtonClick}/>;
        }
        
        return (
            <div className="user-profile-container">
                <div className="name-input">
                    <input 
                        name="namey"
                        type="text"
                        placeholder="Full name"
                        value={this.state.name}
                        onChange={this.nameChange}
                        autoCorrect="none"
                    />
                </div>
                <div className="top-of-activity-buttons">
                    <h6 className="penut">Are you looking for new friends? By submiting that you'r friendly, means</h6>
                    <h6 className="just-nut">you are ok with other people trying to get to know you or hit you up.</h6>
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
                        onChange={this.businessChange}
                    />
                </div>
                <div className="about-edit-textarea">
                    <h4>ABOUT</h4>
                    <textarea 
                        placeholder="Edit your about status"
                        name="about"
                        value={this.state.about}
                        onChange={this.aboutChange}
                    />
                </div>
            </div>
        );
    }
}


    
