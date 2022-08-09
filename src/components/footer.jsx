import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__group">
                    <h3>Позвонить нам:</h3>
                    <div className="footer__links">
                        <a href="tel:74959999999">+7 (495) 999-99-99</a>
                    </div>
                </div>
                <div className="footer__group">
                    <h3>Решения для дома:</h3>
                    <div className="footer__links">
                        <a href="#">Солнечные панели GreenRobotic</a>
                        <a href="#">Системы солнечных панелей GreenStation</a>
                    </div>
                </div>
                <div className="footer__group">
                    <h3>Компания</h3>

                    <div className="footer__links">
                        <a href="#">Контакты</a>
                        <a href="#">Вакансии</a>
                        <a href="#">СМИ</a>
                    </div>
                </div>
            </div>

            <div className="footer__copyright">
                GreenCorp © 2021
            </div>
        </footer>
    );
};

export default Footer;