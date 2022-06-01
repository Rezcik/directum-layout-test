import React from "react";
import styles from "./logo.module.css";
import {ReactComponent as LogoSvg} from "../../../assets/img/logo.svg";


export function Logo() {
    return (
        <div className={styles.logo}>
            <LogoSvg/>
        </div>
    )
}
