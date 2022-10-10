import React, {useState} from 'react';
import logo from '../img/logo.svg';

const Header = () => {
    const [isScrolled, setScrolled] = useState(false)
    const scrollHandler = () => {
        if (window.scrollY > 0) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    };
    document.addEventListener('scroll', scrollHandler);
    return (
        <header className={(isScrolled ? ' header__scrolled' : '')}>
            <img className={"header__logo"} src={logo}/>
            <div className="header__controls">
                <a href="#contacts">Контакты</a>
                <button>Заказать</button>
            </div>
        </header>
    );
};

export default Header;