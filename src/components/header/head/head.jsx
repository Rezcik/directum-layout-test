import React from "react";
import styles from "./head.module.css";


export function Head() {
    return (
        <div className={styles.title}>
            <h1 className={styles.name}>НАЗВАНИЕ МЕРОПРИЯТИЯ</h1>
            <p className={styles.date}>4 МАЯ 2049</p>
            <p className={styles.description}>в самом сердце страны</p>
        </div>
    )
}
