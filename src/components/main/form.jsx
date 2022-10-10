import React, {useState} from 'react';

const Form = () => {
    const [budget, setBudget] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <form>
            <div className="form__group">
                <label htmlFor="name">Ваше имя</label>
                <input type="text" placeholder="Введите имя" id="name"/>
            </div>
            <div className="form__group">
                <label htmlFor="email">Электронный адрес</label>
                <input type="email" placeholder="***@yandex.ru" id="email"/>
            </div>
            <div className="form__group">
                <label htmlFor="phone">Номер телефона</label>
                <input type="tel" placeholder="7 (999) 999-99-99" id="phone"/>
            </div>
            <div className="form__group">
                <label htmlFor="budget">Примерный бюджет</label>
                <select id="budget" onChange={(e) => setBudget(e.target.value)}>
                    <option> Выберите вариант</option>
                    <option value="10 - 30"> 10 000₽ - 30 000₽</option>
                    <option value="30 - 60"> 30 000₽ - 60 000₽</option>
                    <option value="60 - 100"> 60 000₽ - 100 000₽</option>
                    <option value="100+"> 100 000₽</option>
                    <option value="other">Другое</option>
                </select>
                {budget === 'other' &&
                   <div className={'form__group form__other-input'}>
                       <input style={{marginTop: '1.5rem'}}
                              value={value}
                              onChange={(e) => setValue(e.target.value)}
                              type="text" placeholder={'Введите ваш вариант'}/>
                   </div>
                }
            </div>
            <button type="submit" className="form__submit">
                Отправить заявку
            </button>
        </form>
    );
};

export default Form;