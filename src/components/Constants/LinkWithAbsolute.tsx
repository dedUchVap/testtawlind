import 'react';
import React from "react";
import classes from "./MyNavBar.module.css";

interface LinkWithAbsoluteProps {
    function_render_page: () => void;
    children: React.ReactNode,
}

const LinkWithAbsolute: React.FC<LinkWithAbsoluteProps> = ({function_render_page, children}) => {

    return (
        <div className={'nav-link ' + classes.link} onClick={function_render_page}>
            {children}
        </div>
    );
};

export default LinkWithAbsolute;