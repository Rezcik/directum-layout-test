import React from 'react';
import styles from "./modal.module.css";
import {Input} from "./input/input";
import {ReactComponent as Cross} from "../../assets/img/cross.svg";
import classNames from 'classnames';

export function Modal({modal, setModal}) {
    return (
        <div className={classNames(modal ? styles.active : '', styles.wrapper)} onClick={() => setModal(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.close} onClick={() => setModal(false)}>
                    <Cross/>
                </div>
                <p className={styles.title}>Регистрация</p>
                <Input placeholder="ФИО" type="text"/>
                <Input placeholder="E-mail" type="email"/>
                <button className={styles.button}>Регистрация</button>
            </div>
        </div>
    );
}
