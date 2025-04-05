import 'react'
import classes from "./BigMovieVideoPoster.module.css";

const BigMovieVideoPoster = () => {
    return (
        <>

                    <div className={classes.video_box}>
                    <video className={classes.video} autoPlay={true} muted={true} loop={true} src="/video/baner5.webm"></video>
                        <div className={classes.poster_subscribe}>
                            <div className={classes.poster_name}>Сериалы, Фильмы и</div>
                            <div className={classes.poster_name}> Аниме с Нами!</div>
                            <div className={classes.button_container}><button className={classes.btn_play_with_us}>Начать смотреть</button></div>
                        </div>
                    </div>

        </>
    );
};

export default BigMovieVideoPoster;