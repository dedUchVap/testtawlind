import "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import classes from "./MoviePosterBig.module.css";
import BookMarkButton from "../UI/BookMarkButton.tsx";

const MoviePosterBig = () => {
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col lg={12}>
                        <div className={classes.wrap_poster}>
                            <div className={classes.position_absolute_container}>
                                <picture>
                                    <Image
                                        className={classes.img_poster}
                                        src={
                                            "https://naked-science.ru/wp-content/uploads/2016/04/article_interstellar-teaser08166921.jpg"
                                        }
                                    />
                                </picture>
                                <div className={classes.wrap_poster_describe}>
                                    <div className={classes.title_poster}>
                                        Interstellar
                                    </div>
                                    <div className={classes.describe_container}>

                                        <div className={classes.linear_gradient_container}>
                                    <span className={classes.describe_poster}>
                    Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.
                  </span>
                                        </div>
                                    </div>
                                </div>
                                <BookMarkButton className={classes.button_bookmark}/>
                                <Button className={classes.button_look}>Смотреть</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MoviePosterBig;
