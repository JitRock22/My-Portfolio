import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
          <div className="wrapper">
            <h2 className="logo">JIT DAS</h2>
            <div className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects </a></li>
                    <li><a href="#">Contact</a></li>
                    <i class="ri-menu-fill"></i>
                </ul>
            </div>
          </div>
        </>

    )
}

export default Navbar
