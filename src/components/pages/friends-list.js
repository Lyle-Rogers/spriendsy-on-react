import React, { Component } from "react";

export default class FriendsList extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="friends-list-wrapper">
        <a className="friend" onClick={() => this.props.friendClick("Lyle Chandler Rogers")}>
          <h6>Lyle Chandler Rogers</h6>
          <div className="leb-activity">
            <h6>In Lebaron:</h6>
            {}
          </div>
          <div className="friendly-activity">
            <h6>Friendly:</h6>
            {}
          </div>
        </a>
      </div>
    )
  }
}