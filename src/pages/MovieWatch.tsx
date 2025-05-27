import 'react';
import classes from "./AllPages.module.css";
import {Container, Row, Col} from "react-bootstrap";
import BigMovieAllScreen from "../components/Movie/BigMovieAllScreen.tsx";
import MoreDescribe from "../components/Movie/MoreDescribe.tsx";

const MovieWatch = () => {
    return (
        <div className={classes.wrapper_movie}>
            <Container fluid={true} style={{margin: '0', padding: '0'}}>
                <Row>
                    <Col xs={12}>
                        <BigMovieAllScreen>
                        </BigMovieAllScreen>
                    </Col>
                </Row>
                <Row className={classes.section_watch_movie}>
                    <Col xs={12}>
                        <MoreDescribe>
                        </MoreDescribe>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MovieWatch;