import React from 'react';
import styles from "./input.module.css";

export function Input({placeholder, type}) {
    return (
        <div>
            <input className={styles.input} placeholder={placeholder} type={type}/>
        </div>
    );
}
