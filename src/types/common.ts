import * as React from "react";

export interface IPath {
    url: string,
    component: React.FC,
    name: string
}
export interface IMovieList{
    url: string,
    name: string
}