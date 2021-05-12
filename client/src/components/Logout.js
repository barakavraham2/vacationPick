import React from 'react'
import { LogOut } from '../services/userService'

function Logout() {
    LogOut()
    window.location = "/"
    return (
        <div>
        </div>
    )


}

export default Logout
