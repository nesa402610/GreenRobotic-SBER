import React, {useEffect} from 'react';
import sun from "../../img/sun.png";
import solarpanel from "../../img/solar-panel.png";
import {CanvasBackground} from "../../canvas";

const About = () => {
    useEffect(() => {
        const canvas = new CanvasBackground('orb-canvas');
        canvas.start();
    }, []);
    return (
        <section className="about">
            <canvas className="orb-canvas" id="orb-canvas"/>
            <div className="about__info animate__animated animate__fadeInLeft animate__slow">
                <h1>Солнечные панели GreenRobotic</h1>
                <p>Производите дешёвую экологически чистую электроэнергию из солнечного света</p>
                <button>Узнать подробнее <i className="fas fa-angle-right"/></button>
            </div>
            <div className="about__images animate__animated animate__fadeInRight animate__slow">
                <img alt={'image'} className="about__sun-image" src={sun}/>
                <img alt={'image'} className="about__image" src={solarpanel}/>
            </div>
        </section>
    );
};

export default About;