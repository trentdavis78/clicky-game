import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div class="navbar-fixed header__navbar">
                    <nav>
                        <div class="nav-wrapper green header__navbar__wrapper">
                            <div className="container header__navbar__wrapper__container">
                                <a href="/" class="brand-logo">Clicky Game</a>
                                <ul class="right hide-on-med-and-down">
                                    <li>Score </li>                                    
                                    <li>Top Score</li>
                                </ul>                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;
