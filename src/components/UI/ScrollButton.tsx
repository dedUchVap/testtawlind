import "react";
import classes from "./UI.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import {CSSProperties} from "react";

interface ScrollButtonProps {
    handleClick: (variant: "negative" | "positive") => void;
    variant: "negative" | "positive";
    classProps?: CSSProperties | string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
                                                       handleClick,
                                                       variant,
                                                       classProps,
                                                   }) => {
    return (
        <>
            <button
                className={
                    classes.button_forward +
                    " " +
                    (variant === "positive"
                        ? classes.button_forward_positive
                        : classes.button_forward_negative) +
                    " " +
                    classProps
                }
                onClick={() => {
                    handleClick(variant);
                }}
            >
                <FontAwesomeIcon
                    icon={variant === "positive" ? faArrowRight : faArrowLeft}
                ></FontAwesomeIcon>
            </button>
        </>
    );
};

export default ScrollButton;
