import React from 'react';
import styles from "./footer.module.css";
import logo from "../../assets/img/footer_logo.png"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <img className={styles.logo} src={logo} alt=''/>
            <p className={styles.title}>© DIRECTUM, 2019</p>
        </footer>
    );
}
