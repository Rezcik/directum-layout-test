import React from 'react';
import styles from "./price.module.css";
import {Title} from "../title/title";

export function Price() {
    return (
        <div className={styles.price}>
            <a name="price"/>
            <Title title="Стоимость участия"
                   subtitle="(на 1 человека)"
            />
            <div className={styles.wrapper}>
                <table className={styles.table}>
                    <tr>
                        <th></th>
                        <th>Стоимость ДО 1 января</th>
                        <th>Стоимость ПОСЛЕ 1 января</th>
                    </tr>
                    <tr>
                        <td>С проживанием в 2-местном номере</td>
                        <td>30 000 ₽</td>
                        <td>35 000 ₽</td>
                    </tr>
                    <tr>
                        <td>Доплата за 1-местное проживание</td>
                        <td>500 ₽</td>
                        <td>1 500 ₽</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
