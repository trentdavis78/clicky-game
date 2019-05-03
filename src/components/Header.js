import React from 'react'

const Header = props => 
    (
        <div className="header">
            <div className="navbar-fixed header__navbar">
                <nav>
                    <div className="nav-wrapper green header__navbar__wrapper">
                        <div className="container header__navbar__wrapper__container">
                            <a href="/" className="brand-logo">Clicky Game</a>       
                            <div className="headerMsg">{props.headerMsg}</div>                     
                            <ul className="right hide-on-med-and-down">
                                <li>Score:&nbsp;<span>{`${props.currentScore||"0"}`}</span></li>                                    
                                <li>Top Score:&nbsp;<span>{`${props.currentScore||"0"}`}</span></li>
                            </ul>                                
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )

export default Header;
