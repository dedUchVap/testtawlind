import "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
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
                <Image
                  className={classes.img_poster}
                  src={
                    "https://static.okko.tv/images/v4/616bf93b-c016-4a49-ad37-fc534a7b32b1"
                  }
                />
                <div className={classes.wrap_poster_describe}>
                  <div className={classes.title_poster}>
                    Двенадцать друзей оушена
                  </div>
                  <span className={classes.describe_poster}>
                    Четырехпалый Френки должен был переправить краденый алмаз из
                    Англии в США своему боссу Эви. Но вместо этого герой
                    попадает в эпицентр больших неприятностей. Сделав ставку на
                    подпольном боксерском поединке, Френки попадает в круговорот
                    весьма нежелательных событий.
                  </span>
                </div>
                <BookMarkButton className={classes.button_bookmark} />
                <Button className={classes.button_look}>Смотреть</Button>
              </picture>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MoviePosterBig;
