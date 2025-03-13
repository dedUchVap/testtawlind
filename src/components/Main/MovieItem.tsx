import "react";
import classes from "./MovieItem.module.css";
import * as React from "react";
import { CSSProperties } from "react";

interface IMovieItem {
  name: string;
  url: string;
  stylesCard?: CSSProperties;
  ref: React.Ref<HTMLDivElement>;
}

const MovieItem: React.FC<IMovieItem> = ({ name, url, stylesCard, ref }) => {
  return (
    <>
      <div
        ref={ref}
        className={classes.movie_card}
        style={stylesCard && stylesCard}
      >
        <div className={classes.wrap_card_movie}>
          <div className={classes.wrap_img}>
            <img
              alt={"Фильм"}
              className={classes.movie_img}
              src={url}
              srcSet={url}
            />
          </div>
          <div className={classes.wrap_card_name}>
            <span className={classes.movie_card_name}>{name}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
