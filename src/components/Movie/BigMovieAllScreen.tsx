import 'react';
import classes from "./BigMovieAllScreen.module.css";
import CardDescription from "./CardDescription.tsx";
import {useMediaQuery} from "../../hooks/mediaQuery.ts";
import BigMovieAllScreenMobile from "./BigMovieAllScreenMobile.tsx";
import LinePrettyMbRenameLetter from "../Main/LinePrettyMbRenameLetter.tsx";

const BigMovieAllScreen = () => {

    const isMobile = useMediaQuery("(max-width: 900px)")

    if (isMobile){
        return (
            <>
                <BigMovieAllScreenMobile></BigMovieAllScreenMobile>
            </>
        )
    }
    return (
        <>
            <div className={classes.wrapper_img}>
                <img className={classes.img_movie} src={'/img/bigPoster/delo.jpg'} alt={'Постер фильма'}/>
                <div className={classes.wrap_card_info_relative}>
                    <div className={classes.box_card}>
                        <CardDescription classname={classes.card}></CardDescription>
                    </div>
                </div>
                <div className={classes.wrap_card_info_relative_right}>
                </div>
            </div>
            <LinePrettyMbRenameLetter style={{height: '35px', top: '-35px'}}></LinePrettyMbRenameLetter>
        </>
    );
};

export default BigMovieAllScreen;