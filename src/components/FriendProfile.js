import React from 'react'

function FriendProfile(props) {
    console.log(props);
    const {profile} = props;
    return (
        profile ? (
        <div>
            <h1>{profile.name}</h1>
            <h2>{profile.email}</h2>
        </div>
    ):<></>
    )
}

export default FriendProfile
