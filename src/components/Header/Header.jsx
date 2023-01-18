import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { FcHome } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'


const Header = () => {

    const showNav = () => {
        const display = document.getElementById('Navigation');
        const modal = document.getElementById('Modal');
        const close = document.getElementById('Closex');
        const hide = document.getElementById('Toggleb');

        display.classList.add('show-nav');
        modal.classList.add('open-modal');
        close.classList.add('open-modal');
        hide.classList.add('seeing');
    };

    const hideNav = () => {
        const display = document.getElementById('Navigation');
        const modal = document.getElementById('Modal');
        const close = document.getElementById('Closex');
        const hide = document.getElementById('Toggleb');

        display.classList.remove('show-nav');
        modal.classList.remove('open-modal');
        close.classList.remove('open-modal');
        hide.classList.remove('seeing');
    };

    return (
        <header>
            <Link to='/'><FcHome className="home" /></Link>
            <nav id="Navigation">
                <ul>
                    <li><Link to="/newbie" className="nav-list">Newbie</Link></li>
                    <li><Link to="/junior" className="nav-list">Junior</Link></li>
                    <li><Link to="/intermediate" className="nav-list">Intermediate</Link></li>
                    <li><Link to="/advanced" className="nav-list">Advanced</Link></li>
                    <li><Link to="/guru" className="nav-list">Guru</Link></li>
                </ul>
            </nav>
            <div className="toggle" id="Toggleb" onClick={showNav}>
                <span className="menu-bar"></span>
            </div>
            <AiOutlineClose className="close-btn" id="Closex" onClick={hideNav} />
            <span className="modal" id='Modal' onClick={hideNav}></span>
        </header>
    )
}

export default Header
