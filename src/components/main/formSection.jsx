import React from 'react';
import Form from "./form";

const FormSection = () => {
    return (
        <section className="form">
            <div className="form__containter">
                <h1>Оставьте свои контакты</h1>
                <p>Поможем подобрать модель.
                    <br/> Выбрать удобный вариант доставки и установки.
                    <br/> Гарантия возврата денег.
                </p>
                <Form/>
            </div>
        </section>
    );
};

export default FormSection;