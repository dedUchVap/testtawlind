import 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import classes from "./BigMovieVideoPoster.module.css";

const BigMovieVideoPoster = () => {
    return (
        <>
        <Container fluid={true} className={'p-0'}>
            <Row>
                <Col lg={12}>
                    <div className={classes.video_box}>
                    <video className={classes.video} autoPlay={true} muted={true} loop={true} src="/video/baner5.webm"></video>
                        <div className={classes.poster_subscribe}>
                            <div className={classes.poster_name}>Сериалы, Фильмы и</div>
                            <div className={classes.poster_name}> Аниме с Нами!</div>
                            <div className={classes.button_container}><button className={classes.btn_play_with_us}>Начать смотреть</button></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default BigMovieVideoPoster;