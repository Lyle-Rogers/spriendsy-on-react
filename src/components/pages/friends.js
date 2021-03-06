import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import axios from "axios";

import FriendsList from "./friends-list";

function RedIcon() {
  return (
    <div className="red-icon">
      <FontAwesomeIcon icon="jedi" />
    </div>
  );
}

function GreenIcon() {
  return (
    <div className="green-icon">
      <FontAwesomeIcon icon="jedi" />
    </div>
  );
}

export default class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      friendly: false,
      inLebaron: false,
      business: "",
      about: "",
      contactInfo: "",
      profileInView: null
    };

    this.friendClick = this.friendClick.bind(this);
  }

  friendClick(theId) {
    axios.get(`http://localhost:3000/users/${theId}`)
      .then((res) => {
        this.setState({
          business: res.data.business,
          about: res.data.about,
          contactInfo: res.data.contactInfo,
          profileInView: theId
        })
      })
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/users/${this.state.userId}`)
      .then((res) => {
        this.setState({
          friendly: res.data.friendly,
          inLebaron: res.data.inLebaron
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

    let businessPlaceHolder;
    let aboutPlaceHolder;
    let contactPlaceHolder;
    if (this.state.profileInVeiw === null) {
      businessPlaceHolder = "Please select a profile.";
      aboutPlaceHolder = "Please select a profile.";
      contactPlaceHolder = "Please select a profile.";
    } else {
      businessPlaceHolder = "This person doesn't have their business set up yet.";
      aboutPlaceHolder = "This person has nothing to say about themself.";
      contactPlaceHolder = "No contact info!"
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
          <NavLink to="/user-profile" activeClassName="nav-link-active">
            <div className="user-edit">
              <div className="edit-icon-container">
                <FontAwesomeIcon icon="user-edit" />
              </div>
              <div className="user-name">
                <input value={this.state.userId} readOnly />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="bottom-column">
          <div className="left-side">
            <div className="buisiness-textarea">
              <h4>BUSINESS</h4>
              <textarea
                placeholder={businessPlaceHolder}
                readOnly
                value={this.state.business}
              />
            </div>
            <div className="about-textarea">
              <h4>ABOUT</h4>
              <textarea
                placeholder={aboutPlaceHolder}
                readOnly
                value={this.state.about}
              />
            </div>
            <div className="contact-info-input">
              <h4>CONTACT INFO</h4>
              <input
                placeholder={contactPlaceHolder}
                readOnly
                value={this.state.contactInfo}
              />
            </div>
          </div>
          <div className="right-side">
            <FriendsList
              friendClick={this.friendClick}
              profileInView={this.state.profileInView}
            />
          </div>
        </div>
      </div>
    );
  }
}
