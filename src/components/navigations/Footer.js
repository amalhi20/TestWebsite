import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'

const MenuBar = () => {
    return (
        <footer >
            <div className="footer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/Test2">Maths Test</a></li>   
                    <li><a href="/Test1">Science Test</a></li>     
                </ul>      
                <p>&copy; Amrinder Kaur. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MenuBar;