import 'react';
import classes from "./UIALL.module.css";
import React from "react";

interface LinePrettyMbRenameLetterProps{
    classname?: string
    style?: React.CSSProperties
}

const LinePrettyMbRenameLetter: React.FC<LinePrettyMbRenameLetterProps> = ({classname, style}) => {
    return (
        <div className={classes.line_wrap}>
            <div className={classes.line_pretty + ' ' + classname} style={style}>

            </div>
        </div>
    );
};

export default LinePrettyMbRenameLetter;