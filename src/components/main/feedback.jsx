import React, {useEffect, useState} from 'react';

const Feedback = () => {
    const updateScroll = () => {
        let windowBottomPosition = window.scrollY + window.innerHeight;
        let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
        if (windowBottomPosition >= countElementPosition && !isActive) {
            setActive(true);
            // updateClients();
        }
    };
    window.addEventListener('scroll', updateScroll);
    const [clients, setClients] = useState(0);
    const [isActive, setActive] = useState(false);

    const speed = 50;
    useEffect(() => {
        setTimeout(() => {
            if (isActive) {
                updateClients();
            }
        }, speed);

    }, [clients, isActive]);


    const updateClients = () => {
        if (clients < 5000) {
            setClients(clients + 100);
        } else {
            setClients('5000+');
        }
    };
    return (
        <div className="features__feedback">
            <div className="features__feedback-left">
                <h2 className={'features__clients-count'}>Нам доверяет <br/>{clients} счастливых клиентов</h2>
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