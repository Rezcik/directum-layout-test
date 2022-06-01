import React from 'react';
import styles from "./speakers.module.css";
import {Card} from "./card/card";
import img from "../../assets/img/speakers.png"
import {Title} from "../title/title";

export function Speakers() {
    return (
        <div>
            <a name="speakers"/>
            <Title title="Наши спикеры"/>
            <div className={styles.speakers}>
                <Card img={img}
                      title="Детектив пикачу"
                      description="уморительный, остроумный и обаятельный сыщик"
                />
                <Card img={img}
                      title="Детектив пикачу"
                      description="уморительный, остроумный и обаятельный сыщик"
                />
                <Card img={img}
                      title="Детектив пикачу"
                      description="уморительный, остроумный и обаятельный сыщик"
                />
                <Card img={img}
                      title="Детектив пикачу"
                      description="уморительный, остроумный и обаятельный сыщик"
                />
                <Card img={img}
                      title="Детектив пикачу"
                      description="уморительный, остроумный и обаятельный сыщик"
                />
                <Card img={img}
                      title="Детектив пикачу"
                      description="уморительный, остроумный и обаятельный сыщик"
                />
            </div>
        </div>
    );
}
