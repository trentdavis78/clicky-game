import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <div class="navbar-fixed">
                    <nav>
                        <div class="nav-wrapper green">
                            <div className="container">
                                <a href="/" class="brand-logo">Clicky Game</a>
                                <ul class="right hide-on-med-and-down">
                                    <li><a href="sass.html">Sass</a></li>
                                    <li><a href="badges.html">Components</a></li>
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
