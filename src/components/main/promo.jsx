import React from 'react';

const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__image">
            </div>
            <div className="promo__right">
                <div className={'promo__card'}>
                    <h2>Зарядите свой дом</h2>
                    <p>Солнечные панели сертифицированы мировыми экспертами: система безопасна и надежна</p>
                    <p>Следите за накоплением энергии вашего дома в режиме реального времени и настраивайте процент
                       расхода и накопления энергии</p>
                    <div className={'btn__container'}>
                        <button>
                            <span>Заказать</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;