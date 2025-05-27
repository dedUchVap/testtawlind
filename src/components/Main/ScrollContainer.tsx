import "react";
import * as React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {IMovieList} from "../../types/common.ts";
import MovieItem from "./MovieItem.tsx";
import 'swiper/css';
import 'swiper/css/navigation'
import classes from "./ScrollCssModule.module.css";

interface ScrollProps {
    items: IMovieList[]
}


const ScrollContainerMovie: React.FC<ScrollProps>  = ({items}) => {
        return (
            <>
            <Swiper className={classes.swiper_my} slidesPerView={3} spaceBetween={20} breakpoints={{0: {slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 5}, 480: {slidesPerView: 2, slidesPerGroup: 2}, 917: {slidesPerView: 3, slidesPerGroup: 2}, 1024: {slidesPerView: 5, slidesPerGroup: 5}}} modules={[Navigation]} navigation>
                {items.map(i => (
                    <SwiperSlide>
                        <MovieItem name={i.name} url={i.url}></MovieItem>
                    </SwiperSlide>))}
            </Swiper>
            </>
        );
    }
;

export default ScrollContainerMovie;