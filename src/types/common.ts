import * as React from "react";

export interface IPath {
    url: string,
    component: React.FC,
    name: string,
    render_func: boolean
}

export interface IMovieList {
    url: string,
    name: string
}
export interface IMovieBig{
    id: number
    imgUrl: string,
    name: string,
    describe: string
}
export interface IPathModal{
    render_func: () => void
    name: string
}