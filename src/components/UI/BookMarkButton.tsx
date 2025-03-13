import React from 'react';
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookBookmark} from "@fortawesome/free-solid-svg-icons";

interface IProps {
    className?: string;
}

const BookMarkButton: React.FC<IProps> = ({className}) => {
    return (
        <>
            <Button className={className}>
                <FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon>
            </Button>
        </>
    );
};

export default BookMarkButton;