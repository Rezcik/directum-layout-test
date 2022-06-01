import React from 'react';
import styles from "./title.module.css";

export function Title({title, subtitle}) {
    return (
        <div className={styles.title}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
}
