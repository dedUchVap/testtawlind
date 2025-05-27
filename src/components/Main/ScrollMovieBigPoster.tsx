import "react";
import * as React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperClass} from 'swiper'
import {Navigation} from "swiper/modules";
import {IMovieBig} from "../../types/common.ts";
import 'swiper/css';
import 'swiper/css/navigation'
import MoviePosterBig from "./MoviePosterBig.tsx";
import classes from "./ScrollCssModule.module.css";
import {useRef} from "react";

interface ScrollProps {
    items: IMovieBig[]
}


const ScrollContainerBigMovie: React.FC<ScrollProps>  = ({items}) => {


    const swiperRef = useRef<SwiperClass | null>(null)

    return (
        <>
            <Swiper onSwiper={swiper => swiperRef.current = swiper}
                    className={classes.swipe_my}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true} spaceBetween={30}
                    breakpoints={{1024: {spaceBetween: 5}}}
                    modules={[Navigation]}
                    navigation style={{overflow: "visible"}}>
                {items.map(i => (
                    <SwiperSlide key={i.id} className={classes.slide}>
                        <MoviePosterBig item={i}></MoviePosterBig>
                    </SwiperSlide>))}
            </Swiper>
        </>
        );
    }
;

export default ScrollContainerBigMovie;