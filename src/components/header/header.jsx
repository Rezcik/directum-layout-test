import React, {useState} from "react";
import styles from "./header.module.css";
import {Menu} from "./menu/menu";
import {Logo} from "./logo/logo";
import {Head} from "./head/head";
import {Button} from "../button/button";
import {Modal} from "../modal/modal";


export function Header() {
    const [modal, setModal] = useState(false);
    return (
        <header className={styles.header}>
            <Modal modal={modal} setModal={setModal}/>
            <Menu setModal={setModal}/>
            <Logo/>
            <Head/>
            <Button modal={modal} setModal={setModal}/>
        </header>
    )
}
