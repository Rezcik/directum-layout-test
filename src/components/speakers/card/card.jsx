import React from 'react';
import styles from "./card.module.css";

export function Card({img, title, description}) {
    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={img} alt=''/>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
