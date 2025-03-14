import 'react'
import classes from "./MovieList.module.css";
import MovieItem from "./MovieItem.tsx";

const MovieList = () => {
  return (
    <>
      <div className={classes.name_list}>Хиты прошлых лет</div>
      <div
        ref={scrollRefContainer}
        className={isMobile ? classes.movie_mobile : classes.movie}
        style={{ gap: gap }}
      >
        {movieList.map((el) => (
          <MovieItem
            stylesCard={{
              width: widthCard,
              flexBasis: widthCard,
              transform: `translateX(${-cardScrollInfo.offset}px)`,
              transition: `all ${0.4}s`,
            }}
            key={el.name}
            name={el.name}
            url={el.url}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
