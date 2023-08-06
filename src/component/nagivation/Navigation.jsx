import React from 'react'
import Logo from '../../images/Logo.png'
import './navigation.css'

const Navigation = () => {
  return (
    <>
      <div className="container">
        <div className="navigation">
            <div className="logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="nav-container">
                <ul className="navs">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navigation