import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

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

export default class FriendsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      LRinLebaron: true,
      LRfriendly: false,

      JLinLebaron: true,
      JLfriendly: false,

      // inLebaron: false,
      // friendly: false,

      // inLebaron: false,
      // friendly: false,

      // inLebaron: false,
      // friendly: false,

      // inLebaron: false,
      // friendly: false,

      // inLebaron: false,
      // friendly: false,

      // inLebaron: false,
      // friendly: false,
    }
  }

  componentWillMount() {
    Axios.get("http://localhost:3000/users/Lyle Chandler Rogers")
      .then((res) => {
        this.setState({
          LRinLebaron: res.data.inLebaron,
          LRfriendly: res.data.friendly
        })
      })

    Axios.get("http://localhost:3000/users/Jashua Lebaron")
      .then((res) => {
        this.setState({
          JLinLebaron: res.data.inLebaron,
          JLfriendly: res.data.friendly
        })
      })

    // Axios.get("http://localhost:3000/users/")
    //   .then((res) => {
    //     this.setState({
    //       inLebaron: res.data.inLebaron,
    //       friendly: res.data.friendly
    //     })
    //   })

    // Axios.get("http://localhost:3000/users/")
    //   .then((res) => {
    //     this.setState({
    //       inLebaron: res.data.inLebaron,
    //       friendly: res.data.friendly
    //     })
    //   })

    // Axios.get("http://localhost:3000/users/")
    //   .then((res) => {
    //     this.setState({
    //       inLebaron: res.data.inLebaron,
    //       friendly: res.data.friendly
    //     })
    //   })
  }

  render() {
    let LRlebIcon;
    let LRfriendlyIcon;
    if (this.state.LRinLebaron === false) {
      LRlebIcon = <RedIcon />;
    } else {
      LRlebIcon = <GreenIcon />;
    }
    if (this.state.LRfriendly === false) {
      LRfriendlyIcon = <RedIcon />;
    } else {
      LRfriendlyIcon = <GreenIcon />;
    }

    let JLlebIcon;
    let JLfriendlyIcon;
    if (this.state.JLinLebaron === false) {
      JLlebIcon = <RedIcon />;
    } else {
      JLlebIcon = <GreenIcon />;
    }
    if (this.state.JLfriendly === false) {
      JLfriendlyIcon = <RedIcon />;
    } else {
      JLfriendlyIcon = <GreenIcon />;
    }

    // let lebIcon;
    // let friendlyIcon;
    // if (this.state.inLebaron === false) {
    //   lebIcon = <RedIcon />;
    // } else {
    //   lebIcon = <GreenIcon />;
    // }
    // if (this.state.friendly === false) {
    //   friendlyIcon = <RedIcon />;
    // } else {
    //   friendlyIcon = <GreenIcon />;
    // }

    // let lebIcon;
    // let friendlyIcon;
    // if (this.state.inLebaron === false) {
    //   lebIcon = <RedIcon />;
    // } else {
    //   lebIcon = <GreenIcon />;
    // }
    // if (this.state.friendly === false) {
    //   friendlyIcon = <RedIcon />;
    // } else {
    //   friendlyIcon = <GreenIcon />;
    // }

    // let lebIcon;
    // let friendlyIcon;
    // if (this.state.inLebaron === false) {
    //   lebIcon = <RedIcon />;
    // } else {
    //   lebIcon = <GreenIcon />;
    // }
    // if (this.state.friendly === false) {
    //   friendlyIcon = <RedIcon />;
    // } else {
    //   friendlyIcon = <GreenIcon />;
    // }

    return (
      <div className="friends-list-wrapper">
        <a className="friend" onClick={() => this.props.friendClick("Lyle Chandler Rogers")}>
          <input value="Lyle Chandler Rogers" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {LRlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {LRfriendlyIcon}
            </div>
          </div>
        </a>

        <a className="friend" onClick={() => this.props.friendClick("Joshua Lebaron")}>
          <input value="Joshua Lebaron" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {JLlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {JLfriendlyIcon}
            </div>
          </div>
        </a>

        {/* <a className="friend" onClick={() => this.props.friendClick("")}>
          <input value="" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {lebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {friendlyIcon}
            </div>
          </div>
        </a>

        <a className="friend" onClick={() => this.props.friendClick("")}>
          <input value="" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {lebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {friendlyIcon}
            </div>
          </div>
        </a>

        <a className="friend" onClick={() => this.props.friendClick("")}>
          <input value="" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {lebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {friendlyIcon}
            </div>
          </div>
        </a> */}
      </div>
    )
  }
}