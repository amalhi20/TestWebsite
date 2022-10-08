import React from 'react'

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>Amrinder Kaur</a>
                
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Home</a></li>                    
                    <li><a href="/Test2">Maths Test</a></li>   
                    <li><a href="/Test1">Science Test</a></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;