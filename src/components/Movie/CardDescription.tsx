import 'react';
import classes from "./CardDescription.module.css";
import React from "react";

interface CardDescriptionProps {
    classname?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({classname}) => {
    return (
        <div className={classes.wrapper_card}>
            <div className={classes.card + ' ' + classname}>
                <div className={classes.title_block}>
                    <div>Министерство неджентльменских дел</div>
                </div>
                <div className={classes.block_metadata}>
                    <div className={classes.block_grade}>
                        7.32
                    </div>
                    <div className={classes.block_year}>
                        2025,
                    </div>
                    <div className={classes.block_genre}>
                        Боевик
                    </div>
                    <div className={classes.block_country}>
                        США
                    </div>
                    <div className={classes.block_duration}>
                        1 ч 21 мин
                    </div>
                    <div className={classes.age_rating}>
                        18+
                    </div>
                </div>
                <div className={classes.block_description}>
                    <div>
                        Отряду авантюристов поручают невыполнимую миссию. Новый фильм Гая Ричи и продюсера «Пиратов Карибского моря»
                    </div>
                </div>
                <div className={classes.block_watch}>
                </div>
            </div>
        </div>
    );
};

export default CardDescription;