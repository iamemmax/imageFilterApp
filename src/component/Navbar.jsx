import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import "./css/Navbar.scss"

function Navbar() {
    const [fixedHeader, setFixedHeader] = useState(false);

    const handleHeader = () => {
    
        if(window.pageYOffset >  10){
            setFixedHeader(true)
            
        }else{
            setFixedHeader(false)
        }

}

  window.addEventListener("scroll", handleHeader)
    return (
        <div className="container">

            <div className={fixedHeader ? 'header fixed' : 'header'}>
            <nav>
                <div className="logo">
                    <h1><Link to="/">KingPix</Link></h1>
                </div>
                {/* <ul className='ul'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul> */}
            </nav>            
            </div>
        </div>
    )
}

export default Navbar
