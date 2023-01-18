import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { FcHome } from 'react-icons/fc'


const Header = () => {
    return (
        <header>
            <Link to='/'><FcHome className="home" /></Link>
            <nav>
                <ul>
                    <li><Link to="/newbie" className="nav-list">Newbie</Link></li>
                    <li><Link to="/junior" className="nav-list">Junior</Link></li>
                    <li><Link to="/intermediate" className="nav-list">Intermediate</Link></li>
                    <li><Link to="/advanced" className="nav-list">Advanced</Link></li>
                    <li><Link to="/guru" className="nav-list">Guru</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
