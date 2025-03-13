import 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import classes from "./MoviePosterBig.module.css";
import BookMarkButton from "../UI/BookMarkButton.tsx";

const MoviePosterBig = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={classes.wrap_poster}>
                        <picture>
                            <Image className={classes.img_poster} src={'https://static.okko.tv/images/v4/616bf93b-c016-4a49-ad37-fc534a7b32b1'}/>
                            <div className={classes.title_poster}>Двенадцать друзей оушена</div>
                            <BookMarkButton className={classes.} />
                        </picture>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MoviePosterBig;