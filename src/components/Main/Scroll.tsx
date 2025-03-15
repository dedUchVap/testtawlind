import "react";
import classes from "./MovieList.module.css";
import {CSSProperties,} from "react";
import {Col, Container, Row} from "react-bootstrap";
import * as React from "react";
import ScrollButton from "../UI/ScrollButton.tsx";
import useScroll from "../../hooks/scrollHook.ts";
import {useImmer} from "use-immer";


interface ScrollProps {
    lenCardMobile: number;
    lenCardDesktop: number;
    lenCardMiddle: number;
    gap: number;
    scale: number;
    children: React.ReactElement<ScrollItemProps>[] | undefined
    list?: any[]
}
interface ScrollItemProps {
    children: React.ReactNode
    style?: CSSProperties;
    handleHover?: (event: React.MouseEvent) => void
}

const Scroll: React.FC<ScrollProps> & {ScrollItem: React.FC<ScrollItemProps>} = ({
    children,
    lenCardDesktop = 7,
    lenCardMiddle = 5,
    lenCardMobile = 3,
    gap,
}) => {

   const ScrollItem: React.FC<ScrollItemProps> = () => {
        return (
            <div>

            </div>
        )
    }
    Scroll.ScrollItem = ScrollItem
    const [arrayChildren, setArrayChildren] = useImmer<React.ReactElement<ScrollItemProps>[] | []>(children ? React.Children.toArray(children).filter((el) => typeof el === "function") : [])

    const [widthCard, isMobile, getNextOffset] = useScroll(lenCardDesktop, lenCardMiddle, lenCardMobile, gap, arrayChildren)
    function handleClick(variant: "positive" | "negative") {
        getNextOffset(variant)
    }


    return (
        <>
            <Container fluid={true}>
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
                            {arrayChildren.map((el) => {
                                if (el.props){
                                    el.props.style = {width: widthCard}
                                }
                                return el
                            })}
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

export default Scroll;
