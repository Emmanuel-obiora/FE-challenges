import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1><Link to='/'>Home</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/newbie">Newbie</Link></li>
                    <li><Link to="/junior">Junior</Link></li>
                    <li><Link to="/intermediate">Intermediate</Link></li>
                    <li><Link to="/advanced">Advanced</Link></li>
                    <li><Link to="/guru">Guru</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
