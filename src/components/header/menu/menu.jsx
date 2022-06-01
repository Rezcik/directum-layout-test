import React, {useState} from "react";
import styles from "./menu.module.css";
import {Burger} from "./burger/burger";
import classNames from 'classnames';

export function Menu({setModal}) {
    const [state, setState] = useState(false);
    return (
        <div className={styles.wrapper}>
            <Burger state={state} setState={setState}/>
            <ul className={classNames(state ?  styles.mobile : '', styles.menu)}>
                <li className={styles.link} >
                    <a href="#about">О мероприятии</a>
                </li>
                <li className={styles.link} >
                    <a href="#registration" onClick={() => setModal(true)}>Регистрация</a>
                </li>
                <li className={styles.link}>
                    <a href="#price">Стоимость участия</a>
                </li>
                <li className={styles.link}>
                    <a href="#speakers">Спикеры</a>
                </li>
            </ul>
        </div>
    )
}
