import 'react'
import React from "react";
import classes from "./MovieListContainer.module.css";


interface MovieListProps {
    children: React.ReactNode;
}


const MovieListContainer: React.FC<MovieListProps> = ({children}) => {
    return (
        <div className={classes.warp_list_movie}>
            {children}
        </div>
    );
};

export default MovieListContainer;
