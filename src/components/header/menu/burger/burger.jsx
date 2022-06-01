import React from "react";
import styles from "./burger.module.css";
import classNames from "classnames";

export function Burger({state, setState}) {
    return (
        <div className={classNames(state ? styles.active : "", styles.burger)} onClick={() => Toggle({state, setState})}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

function Toggle({state, setState}) {
    if(!state) {
        setState(true);
        return null;
    } else {
        setState(false);
        return null;
    }
}
