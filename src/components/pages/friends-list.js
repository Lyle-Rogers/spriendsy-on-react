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
  constructor() {
    super()

    this.state = {
      profileInView: null,

      LRinLebaron: true,
      LRfriendly: false,

      JLinLebaron: true,
      JLfriendly: false,

      HHBinLebaron: false,
      HHBfriendly: false,

      JPinLebaron: false,
      JPfriendly: false,

      AJinLebaron: false,
      AJfriendly: false,

      DLinLebaron: false,
      DLfriendly: false,

      CLinLebaron: false,
      CLfriendly: false,

      JL2inLebaron: false,
      JL2friendly: false,

      MLinLebaron: false,
      MLfriendly: false,

      ALinLebaron: false,
      ALfriendly: false,

      ELinLebaron: false,
      ELfriendly: false,

      // inLebaron: false,
      // friendly: false,

      // inLebaron: false,
      // friendly: false,
    }
  }

  componentWillMount() {
    Axios.get("http://localhost:3000/users/Lyle Rogers")
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

    Axios.get("http://localhost:3000/users/Hector Herrera Bustillos")
      .then((res) => {
        this.setState({
          HHBinLebaron: res.data.inLebaron,
          HHBfriendly: res.data.friendly
        })
      })

    Axios.get("http://localhost:3000/users/Jenifer Spencer")
      .then((res) => {
        this.setState({
          JPinLebaron: res.data.inLebaron,
          JPfriendly: res.data.friendly
        })
      })

    Axios.get("http://localhost:3000/users/Auston Jones")
      .then((res) => {
        this.setState({
          AJinLebaron: res.data.inLebaron,
          AJfriendly: res.data.friendly
        })
      })

    Axios.get("http://localhost:3000/users/Don Lebaron")
      .then((res) => {
        this.setState({
          DLinLebaron: res.data.inLebaron,
          DLfriendly: res.data.friendly
        })
      })

    Axios.get("http://localhost:3000/users/Clayton Lebaron")
      .then((res) => {
        this.setState({
          CLinLebaron: res.data.inLebaron,
          CLfriendly: res.data.friendly
        })
      })

    Axios.get("http://localhost:3000/users/Justin Lebaron")
      .then((res) => {
        this.setState({
          JL2inLebaron: res.data.inLebaron,
          JL2friendly: res.data.friendly
        })
      })

    Axios.get("http://localhost:3000/users/Mario Lebaron")
      .then((res) => {
        this.setState({
          MLinLebaron: res.data.inLebaron,
          MLfriendly: res.data.friendly
        })
      })

    Axios.get("http://localhost:3000/users/Annika Lebaron")
      .then((res) => {
        this.setState({
          ALinLebaron: res.data.inLebaron,
          ALfriendly: res.data.friendly
        })
      })

    Axios.get("http://localhost:3000/users/Enoch Lebaron")
      .then((res) => {
        this.setState({
          ELinLebaron: res.data.inLebaron,
          ELfriendly: res.data.friendly
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

    // Axios.get("http://localhost:3000/users/")
    //   .then((res) => {
    //     this.setState({
    //       inLebaron: res.data.inLebaron,
    //       friendly: res.data.friendly
    //     })
    //   })
  }

  render() {
    let profileInView = this.props.profileInView;
    this.state.profileInView = profileInView;

    let LRlebIcon;
    let LRfriendlyIcon;
    let LRbackgroundColor;
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
    if (this.state.profileInView === "Lyle Rogers") {
      LRbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      LRbackgroundColor = "none"
    }

    let JLlebIcon;
    let JLfriendlyIcon;
    let JLbackgroundColor;
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
    if (this.state.profileInView === "Joshua Lebaron") {
      JLbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      JLbackgroundColor = "none"
    }

    let HHBlebIcon;
    let HHBfriendlyIcon;
    let HHBbackgroundColor;
    if (this.state.HHBinLebaron === false) {
      HHBlebIcon = <RedIcon />;
    } else {
      HHBlebIcon = <GreenIcon />;
    }
    if (this.state.HHBfriendly === false) {
      HHBfriendlyIcon = <RedIcon />;
    } else {
      HHBfriendlyIcon = <GreenIcon />;
    }
    if (this.state.profileInView === "Hector Herrera Bustillos") {
      HHBbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      HHBbackgroundColor = "none"
    }

    let JPlebIcon;
    let JPfriendlyIcon;
    let JPbackgroundColor;
    if (this.state.JPinLebaron === false) {
      JPlebIcon = <RedIcon />;
    } else {
      JPlebIcon = <GreenIcon />;
    }
    if (this.state.JPfriendly === false) {
      JPfriendlyIcon = <RedIcon />;
    } else {
      JPfriendlyIcon = <GreenIcon />;
    }
    if (this.state.profileInView === "Jenifer Spencer") {
      JPbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      JPbackgroundColor = "none"
    }

    let AJlebIcon;
    let AJfriendlyIcon;
    let AJbackgroundColor;
    if (this.state.AJinLebaron === false) {
      AJlebIcon = <RedIcon />;
    } else {
      AJlebIcon = <GreenIcon />;
    }
    if (this.state.AJfriendly === false) {
      AJfriendlyIcon = <RedIcon />;
    } else {
      AJfriendlyIcon = <GreenIcon />;
    }
    if (this.state.profileInView === "Auston Jones") {
      AJbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      AJbackgroundColor = "none"
    }

    let DLlebIcon;
    let DLfriendlyIcon;
    let DLbackgroundColor;
    if (this.state.DLinLebaron === false) {
      DLlebIcon = <RedIcon />;
    } else {
      DLlebIcon = <GreenIcon />;
    }
    if (this.state.DLfriendly === false) {
      DLfriendlyIcon = <RedIcon />;
    } else {
      DLfriendlyIcon = <GreenIcon />;
    }
    if (this.state.profileInView === "Don Lebaron") {
      DLbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      DLbackgroundColor = "none"
    }

    let CLlebIcon;
    let CLfriendlyIcon;
    let CLbackgroundColor;
    if (this.state.CLinLebaron === false) {
      CLlebIcon = <RedIcon />;
    } else {
      CLlebIcon = <GreenIcon />;
    }
    if (this.state.CLfriendly === false) {
      CLfriendlyIcon = <RedIcon />;
    } else {
      CLfriendlyIcon = <GreenIcon />;
    }
    if (this.state.profileInView === "Clayton Lebaron") {
      CLbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      CLbackgroundColor = "none"
    }

    let JL2lebIcon;
    let JL2friendlyIcon;
    let JL2backgroundColor;
    if (this.state.JL2inLebaron === false) {
      JL2lebIcon = <RedIcon />;
    } else {
      JL2lebIcon = <GreenIcon />;
    }
    if (this.state.JL2friendly === false) {
      JL2friendlyIcon = <RedIcon />;
    } else {
      JL2friendlyIcon = <GreenIcon />;
    }
    if (this.state.profileInView === "Justin Lebaron") {
      JL2backgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      JL2backgroundColor = "none"
    }

    let MLlebIcon;
    let MLfriendlyIcon;
    let MLbackgroundColor;
    if (this.state.MLinLebaron === false) {
      MLlebIcon = <RedIcon />;
    } else {
      MLlebIcon = <GreenIcon />;
    }
    if (this.state.MLfriendly === false) {
      MLfriendlyIcon = <RedIcon />;
    } else {
      MLfriendlyIcon = <GreenIcon />;
    }
    if (this.state.profileInView === "Mario Lebaron") {
      MLbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      MLbackgroundColor = "none"
    }

    let ALlebIcon;
    let ALfriendlyIcon;
    let ALbackgroundColor;
    if (this.state.ALinLebaron === false) {
      ALlebIcon = <RedIcon />;
    } else {
      ALlebIcon = <GreenIcon />;
    }
    if (this.state.ALfriendly === false) {
      ALfriendlyIcon = <RedIcon />;
    } else {
      ALfriendlyIcon = <GreenIcon />;
    }
    if (this.state.profileInView === "Annika Lebaron") {
      ALbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      ALbackgroundColor = "none"
    }

    let ELlebIcon;
    let ELfriendlyIcon;
    let ELbackgroundColor;
    if (this.state.ELinLebaron === false) {
      ELlebIcon = <RedIcon />;
    } else {
      ELlebIcon = <GreenIcon />;
    }
    if (this.state.ELfriendly === false) {
      ELfriendlyIcon = <RedIcon />;
    } else {
      ELfriendlyIcon = <GreenIcon />;
    }
    if (this.state.profileInView === "Enoch Lebaron") {
      ELbackgroundColor = "rgba(1, 1, 1, 0.342)"
    } if (this.state.profileInView === null) {
      ELbackgroundColor = "none"
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
        <div
          className="lyle-rogers"
          onClick={() => this.props.friendClick("Lyle Rogers")}
          style={{
            backgroundColor: LRbackgroundColor
          }}
        >
          <input value="Lyle Rogers" readOnly />
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
        </div>

        <div
          className="joshua-lebaron"
          onClick={() => this.props.friendClick("Joshua Lebaron")}
          style={{
            backgroundColor: JLbackgroundColor
          }}
        >
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
        </div>

        <div
          className="hector-herrera-bustillos"
          onClick={() => this.props.friendClick("Hector Herrera Bustillos")}
          style={{
            backgroundColor: HHBbackgroundColor
          }}
        >
          <input value="Hector Herrera Bustillos" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {HHBlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {HHBfriendlyIcon}
            </div>
          </div>
        </div>

        <div
          className="jenifer-spencer"
          onClick={() => this.props.friendClick("Jenifer Spencer")}
          style={{
            backgroundColor: JPbackgroundColor
          }}
        >
          <input value="Jenifer Spencer" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {JPlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {JPfriendlyIcon}
            </div>
          </div>
        </div>

        <div
          className="auston-jones"
          onClick={() => this.props.friendClick("Auston Jones")}
          style={{
            backgroundColor: AJbackgroundColor
          }}
        >
          <input value="Auston Jones" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {AJlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {AJfriendlyIcon}
            </div>
          </div>
        </div>

        <div
          className="don-lebaron"
          onClick={() => this.props.friendClick("Don Lebaron")}
          style={{
            backgroundColor: DLbackgroundColor
          }}
        >
          <input value="Don Lebaron" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {DLlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {DLfriendlyIcon}
            </div>
          </div>
        </div>

        <div
          className="clayton-lebaron"
          onClick={() => this.props.friendClick("Clayton Lebaron")}
          style={{
            backgroundColor: CLbackgroundColor
          }}
        >
          <input value="Clayton Lebaron" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {CLlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {CLfriendlyIcon}
            </div>
          </div>
        </div>

        <div
          className="justin-lebaron"
          onClick={() => this.props.friendClick("Justin Lebaron")}
          style={{
            backgroundColor: JL2backgroundColor
          }}
        >
          <input value="Justin Lebaron" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {JL2lebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {JL2friendlyIcon}
            </div>
          </div>
        </div>

        <div
          className="mario-lebaron"
          onClick={() => this.props.friendClick("Mario Lebaron")}
          style={{
            backgroundColor: MLbackgroundColor
          }}
        >
          <input value="Mario Lebaron" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {MLlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {MLfriendlyIcon}
            </div>
          </div>
        </div>

        <div
          className="annika-lebaron"
          onClick={() => this.props.friendClick("Annika Lebaron")}
          style={{
            backgroundColor: ALbackgroundColor
          }}
        >
          <input value="Annika Lebaron" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {ALlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {ALfriendlyIcon}
            </div>
          </div>
        </div>

        <div
          className="enoch-lebaron"
          onClick={() => this.props.friendClick("Enoch Lebaron")}
          style={{
            backgroundColor: ELbackgroundColor
          }}
        >
          <input value="Enoch Lebaron" readOnly />
          <div className="friends-list-activity-wrapper">
            <div className="leb-activity">
              <h4>In Lebaron:</h4>
              {ELlebIcon}
            </div>
            <div className="friendly-activity">
              <h4>Friendly:</h4>
              {ELfriendlyIcon}
            </div>
          </div>
        </div>

        {/* <div className="friend" onClick={() => this.props.friendClick("")}>
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
        </div> */}
        {/* <div className="friend" onClick={() => this.props.friendClick("")}>
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
        </div> */}
        {/* <div className="friend" onClick={() => this.props.friendClick("")}>
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
        </div> */}
        {/* <div className="friend" onClick={() => this.props.friendClick("")}>
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
        </div> */}
      </div>
    )
  }
}