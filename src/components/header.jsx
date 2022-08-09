import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
    return (
        <header>
            <img className="header__logo" src={logo}/>
            <div className="header__controls">
                <a href="#contacts">Контакты</a>
                <button>Заказать</button>
            </div>
        </header>
    );
};

export default Header;