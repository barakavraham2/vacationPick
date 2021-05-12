import React from 'react'
import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <div className="homePage">
            <div className="banner">
                <h1 className="banner-heading">Welcome to Vacation.com</h1>
                <p className="banner-paragraph">Make your life luxurious</p>
                <p className="banner-paragraph2"> click to <Link to="/login"> log in</Link> . Not registered yet? Sign up <Link to="/registran">here</Link></p>
            </div>

        </div>
    )
}
