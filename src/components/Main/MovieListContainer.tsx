import 'react'
import React from "react";
import classes from "./MovieListContainer.module.css";


interface MovieListProps {
    children: React.ReactNode;
}

interface NameMovieListProps {
    children: React.ReactNode;
    className?: string;
}
const NameMovieList: React.FC<NameMovieListProps> = ({children}) => {
    return (
        <div
        className={classes.name_movie_list}>{children}</div>
    )
}


const MovieListContainer: React.FC<MovieListProps> & {Name: React.FC<NameMovieListProps>} = ({children}) => {
    return (
        <div className={classes.warp_list_movie}>
            {children}
        </div>
    );
};

MovieListContainer.Name = NameMovieList

export default MovieListContainer;
