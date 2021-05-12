import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import Vacations from './Vacations'
import HomePage from './HomePage'
function Home(props) {
    const [user, setUser] = useState()
    useEffect(() => {
        try {
            const jwt = localStorage.getItem('token')
            const decode = jwt_decode(jwt)
            setUser(decode)
        }
        catch (err) { }
    }, [])

    return (user) ? (<Vacations />) : <HomePage />

}

export default Home

