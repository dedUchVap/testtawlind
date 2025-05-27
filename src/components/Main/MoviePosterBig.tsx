import "react";
import {Button,Image,} from "react-bootstrap";
import classes from "./MoviePosterBig.module.css";
import BookMarkButton from "../UI/BookMarkButton.tsx";
import React from "react";
import {IMovieBig} from "../../types/common.ts";

interface MoviePosterBigProps {
    item: IMovieBig
}

const MoviePosterBig: React.FC<MoviePosterBigProps> = ({item}) => {
    return (
        <>
            <div className={classes.wrap_poster}>
                <div className={classes.position_absolute_container}>
                    <picture>
                        <Image
                            className={classes.img_poster}
                            src={
                                item.imgUrl
                            }
                        />
                    </picture>
                    <div className={classes.wrap_poster_describe}>
                        <div className={classes.title_poster}>
                            {item.name}
                        </div>
                        <div className={classes.describe_container}>

                            <div className={classes.linear_gradient_container}>
                                    <span className={classes.describe_poster}>
                                        {item.describe}
                                    </span>
                            </div>
                        </div>
                    </div>
                    <BookMarkButton className={classes.button_bookmark}/>
                    <Button className={classes.button_look}>Смотреть</Button>
                </div>
            </div>
        </>
    )
        ;
};

export default MoviePosterBig;
