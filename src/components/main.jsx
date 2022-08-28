import React from 'react';
import About from "./main/about";
import FormSection from "./main/formSection";
import Cards from "./main/cards";
import Feedback from "./main/feedback";
import Promo from "./main/promo";


const Main = () => {
    return (
        <>
            <About/>
            <section className={'features'}>
                <Cards/>
                <div className={'features__border'}/>
                <Feedback/>
                <Promo/>
            </section>
            <FormSection/>
        </>
    );
};

export default Main;