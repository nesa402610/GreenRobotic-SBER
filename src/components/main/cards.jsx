import React from 'react';
import InfoCard from "../infoCard";

const Cards = () => {
    return (
        <div className={'cards'}>
            <InfoCard logo={<i style={{color: '#ffb406'}} className="fa-solid fa-solar-panel"/>}
                      heading={'Уменьшите счета за электричество'}
                      body={'Используйте чистую солнечную энергию для питания своего дома: уменьшите зависимость от электросети и счета за электричество'}
            />
            <InfoCard logo={<i style={{color: '#ad1714'}}>24/7</i>}
                      heading={'Мониторинг электроэнергии'}
                      body={'Управляйте своей системой солнечных панелей из любой точки мира с помощью специального мобильного приложения'}
            />
            <InfoCard logo={<i style={{color: '#22a030'}} className="fa-solid fa-chart-line"/>}
                      heading={'Максимальная эффективность'}
                      body={'Солнечные панели GreenRobotic обеспечивают максимальное производство энергии круглый год, даже на крышах со сложными углами.'}
            />
        </div>
    );
};

export default Cards;