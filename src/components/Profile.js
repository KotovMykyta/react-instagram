import React from 'react'
import User from './User'
import Palette from './Palette'

const Profile = () => {
    return(
        <div className="container profile">
            <User 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
                    alt="user1"
                    name="Pavel"/>
            <Palette />
        </div>
    )
}

export default Profile;