import React from "react";
import styles from "./button.module.css";

export function Button({setModal}) {
    return (
        <button className={styles.button} onClick={() => setModal(true)}>
            Регистрация
        </button>
    )
}
