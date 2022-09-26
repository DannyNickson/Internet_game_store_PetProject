import React from 'react';
import '../styles/main.css'
const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="top__menu">
                    <div className="login__link">login</div>
                    <div className="language__select">language</div>
                </div>
                <div className="low__menu">
                    <div className="logo"><a href="http://localhost:3000/"><img src="" alt="LOGO" /></a></div>
                    <div className="nav__bar">
                        <nav>
                            <li>Store</li>
                            <li>Comunity</li>
                            <li>About</li>
                            <li>Support</li>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;