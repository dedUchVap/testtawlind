import 'react';
import classes from "./BigMovieAllScreen.module.css";
import classesMobile from './BigMovieAllScreenMobile.module.css'
import CardDescription from "./CardDescription.tsx";
import LinePrettyMbRenameLetter from "../Main/LinePrettyMbRenameLetter.tsx";

const BigMovieAllScreenMobile = () => {

    return (
        <>
            <div className={classesMobile.wrapper_img}>
                <img className={classes.img_movie} src={'/img/bigPoster/delo.jpg'} alt={'Постер фильма'}/>
                <div className={classesMobile.wrap_card_info_relative}>
                    <div className={classes.box_card}>
                    </div>
                </div>
                <div className={classesMobile.wrap_card_info_relative_right}>
                </div>
            </div>
            <LinePrettyMbRenameLetter style={{height: '30px', top: '-30px'}}></LinePrettyMbRenameLetter>
            <CardDescription classname={classes.card}></CardDescription>
        </>
    );
};

export default BigMovieAllScreenMobile;