import React from 'react';
import styles from "./info.module.css";
import {Description} from "./description/description";
import {Registration} from "./registration/registration";

export function Info() {
    return (
        <div className={styles.info}>
            <a name="about"/>
            <div className={styles.wrapper}>
                <Description/>
                <Registration/>
            </div>
        </div>
    );
}
