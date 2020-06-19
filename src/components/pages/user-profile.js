import React, { Component } from 'react';

export default class UserProfile extends Component {
    render() {

        return (
            <div className="user-profile-container">
                <div className="name-input">
                    <input placeholder="Full name" />
                </div>
                <div className="avtivity-buttons">
                    <div className="leb-button">
                        <h4>In Lebaron:</h4>
                        <button />
                    </div>
                    <div className="friendly-button">
                        <div className="top-of-friendly-button">
                            <h6>Are you looking for new friends</h6>
                        </div>
                        <div className="bottom-of-friendly-button">
                            <h4>Friendly</h4>
                            <button />
                        </div>
                    </div>
                </div>
                <div className="buisness-edit-textarea">
                    <textarea placeholder="Edit your buisness"/>
                </div>
                <div className="about-edit-textarea">
                    <textarea placeholder="Edit your about status"/>
                </div>
            </div>
        );
    }
}


    
