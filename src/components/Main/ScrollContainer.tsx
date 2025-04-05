import "react";
import classes from "./MovieList.module.css";
import * as React from "react";
import {CSSProperties, ReactElement, useRef} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ScrollButton from "../UI/ScrollButton.tsx";
import useScroll from "../../hooks/scrollHook.ts";
import {breakPoints} from "../../hooks/typesHooks.ts";


interface ScrollProps {
    gap: number;
    scale: number;
    children: React.ReactNode
    fixedWidth?: string
    breakPoints: breakPoints[]
}

interface ScrollItemProps {
    children: React.ReactNode
    style?: CSSProperties;
    handleHover?: (event: React.MouseEvent) => void
}

const ScrollItem: React.FC<ScrollItemProps> = ({children, style, handleHover}) => {
    return (
        <div onClick={handleHover} style={style} className={classes.scroll_item}>
            {children}
        </div>
    )
}

const ScrollContainer: React.FC<ScrollProps> & { ScrollItem: React.FC<ScrollItemProps> } = ({
                                                                                                children,
                                                                                                gap,
    breakPoints,
    fixedWidth = ''
                                                                                            }) => {
        const listChildren = React.Children.toArray(children)
        const scrollRef = useRef<HTMLDivElement>(null)
        const [widthCard, isMobile, getNextOffset, offset] = useScroll(breakPoints, gap, listChildren, scrollRef)

        function handleClick(variant: "positive" | "negative") {
            getNextOffset(variant)
        }


        return (
            <>
                <Container fluid={true} className={'p-0'}>
                    <Row>
                        <Col
                            sm={12}
                            className={"d-flex justify-content-lg-center align-items-lg-center"}
                        >
                            <div className={classes.warp_list_movie}>
                                {!isMobile && (
                                    <ScrollButton
                                        classProps={classes.visible_button}
                                        handleClick={handleClick}
                                        variant={"negative"}
                                    />
                                )}
                                <div className={isMobile ? classes.mobile : classes.scroll_desktop} ref={scrollRef}>
                                    {listChildren.map(child => React.isValidElement(child) ? React.cloneElement(child as ReactElement<{
                                        style?: React.CSSProperties
                                    }>, {
                                        style: {
                                            width: fixedWidth ? fixedWidth : widthCard,
                                            transform: `translateX(${-offset}px)`,
                                            marginRight: gap
                                        }
                                    }) : child)}
                                </div>
                                {!isMobile && (
                                    <ScrollButton
                                        classProps={classes.visible_button}
                                        variant={"positive"}
                                        handleClick={handleClick}
                                    />
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
;
ScrollContainer.ScrollItem = ScrollItem
export {ScrollContainer};