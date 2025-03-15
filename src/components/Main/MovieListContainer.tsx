import 'react'
import React from "react";


interface MovieListProps {
    children: React.ReactNode;
}


const MovieListContainer: React.FC<MovieListProps> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default MovieListContainer;
