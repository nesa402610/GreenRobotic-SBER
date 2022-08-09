import React from 'react';
import sun from "../../img/sun.png";
import solarpanel from "../../img/solar-panel.png";

const About = () => {
    return (
        <section className="about">
            <div className="about__info animate__animated animate__fadeInLeft animate__slow">
                <h1>Солнечные панели GreenRobotic</h1>
                <p>Производите дешёвую экологически чистую электроэнергию из солнечного света</p>
                <button>Узнать подробнее <i className="fas fa-angle-right"/></button>
            </div>
            <div className="about__images animate__animated animate__fadeInRight animate__slow">
                <img className="about__sun-image" src={sun}/>
                    <img className="about__image" src={solarpanel}/>
            </div>
        </section>
    );
};

export default About;