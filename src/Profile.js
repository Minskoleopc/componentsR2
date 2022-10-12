import React from "react";
const Profile = function (props) {
    console.log(props)
    return (
        <div>
            <h1>Company Profile</h1>
            {props.children}
        </div>
    )
   
}

export default Profile
