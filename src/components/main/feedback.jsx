import React from 'react';

const Feedback = () => {
    return (
        <div className="features__feedback">
            <div className="features__feedback-left">
                <h2>Нам доверяет <br/>5000+ счастливых клиентов</h2>
                <p>Мы помогли тысячам людей перейти на зеленую энергию <br/>После заказа мы позаботимся обо всем:
                   доставка панелей, проект, установка, помощь в использовании</p>
            </div>
            <div className="features__feedback-right">
                <div className="features__box features__savings-box">
                    <h3>30 млн ₽</h3>
                    <p>Помогаем экономить нашим клиентам ежемесячно</p>
                </div>
                <div className="features__box features__rate-box">
                    <h3>4.7</h3>
                    <p className={'stars'}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
                    <p>Средняя оценка наших клиентов</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;