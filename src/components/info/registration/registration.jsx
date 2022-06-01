import React from 'react';
import styles from "./registration.module.css";

export function Registration() {
    return (
        <div className={styles.registration}>
            <p className={styles.title}>Регистрация</p>
            <p  className={styles.text}>Пожалуйста, проверьте правильность введенных данных:</p>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    <li>ФИО:</li>
                    <li>Место работы:</li>
                    <li>E-mail:</li>
                </ul>
                <ul className={styles.list}>
                    <li>Иванов Иван Иванович</li>
                    <li>Directum</li>
                    <li>spaik-98@mail.ru</li>
                </ul>
            </div>
        </div>
    );
}
