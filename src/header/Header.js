import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'

const  Header = () =>  {
    return (
        <section className="header">
            <div className="first-title-div">
                <img src={logo} alt="MTN logo" className="logo"/>
                <h1 className="main-title"> Play Numbers!</h1>
            </div>
    
            <p className="paragraph">And stand a chance to <strong>WIN CASH</strong> and more!</p>
        </section>
    )
}

export default Header
