import "react";
import classes from "./MovieList.module.css";
import {useMemo,} from "react";
import {IMovieList} from "../../types/common.ts";
import {Col, Container, Row} from "react-bootstrap";
import * as React from "react";
import ScrollButton from "../UI/ScrollButton.tsx";
import useScroll from "../../hooks/scrollHook.ts";

const initMovieList: IMovieList[] = [
    {
        url: "//avatars.mds.yandex.net/get-kinopoisk-image/1898899/27ed5c19-a045-49dd-8624-5f629c5d96e0/300x450 1x, //avatars.mds.yandex.net/get-kinopoisk-image/1898899/27ed5c19-a045-49dd-8624-5f629c5d96e0/600x900 2x",
        name: "Гарри Поттер и Философский камень",
    },
    {
        url: "//avatars.mds.yandex.net/get-kinopoisk-image/4303601/617303b7-cfa7-4273-bd1d-63974bf68927/300x450 1x, //avatars.mds.yandex.net/get-kinopoisk-image/4303601/617303b7-cfa7-4273-bd1d-63974bf68927/600x900 2x",
        name: "Остров Проклятых",
    },
    {
        url: "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/88d2a9f4-8bc7-451a-b6ef-9eb8bef2b245/300x450 1x, //avatars.mds.yandex.net/get-kinopoisk-image/1599028/88d2a9f4-8bc7-451a-b6ef-9eb8bef2b245/600x900 2x",
        name: "В погоне за счастьем",
    },
    {
        url: "//avatars.mds.yandex.net/get-kinopoisk-image/1946459/7ade06a8-4178-4386-9ee2-87fec5a172eb/300x450 1x, //avatars.mds.yandex.net/get-kinopoisk-image/1946459/7ade06a8-4178-4386-9ee2-87fec5a172eb/600x900 2x",
        name: "Шрек",
    },
    {
        url: "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/300x450 1x, //avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/600x900 2x",
        name: "Аватар",
    },
    {
        url: "//avatars.mds.yandex.net/get-kinopoisk-image/4774061/1a920451-e765-41e9-81aa-78438e82abbc/300x450 1x, //avatars.mds.yandex.net/get-kinopoisk-image/4774061/1a920451-e765-41e9-81aa-78438e82abbc/600x900 2x",
        name: "Как приручить дракона",
    },
    {
        url: "//avatars.mds.yandex.net/get-kinopoisk-image/1773646/27a3c989-e883-40f3-806f-f3ef27fe7177/220x330",
        name: "Шрек 2",
    },
    {
        url: "https://cdn.azbooka.ru/cv/w1100/cfbde54d-3725-4dce-ac99-57692ac4dabb.jpg",
        name: "Гарри поттер и узник аскабана",
    },
    {
        url: "//avatars.mds.yandex.net/get-kinopoisk-image/4303601/672269af-efcb-41c3-85b4-e9ce87f1ea02/300x450",
        name: "Гарри Поттер и кубок огня",
    },
    {
        url: "//avatars.mds.yandex.net/get-kinopoisk-image/1946459/f36090b4-bfea-4e1f-8e13-69dbeaa613ab/300x450",
        name: "Перси Джексон и похититель молнии",
    },
];

interface ScrollItemProps{
    
}

interface MovieListProps {
    lenCardMobile: number;
    lenCardDesktop: number;
    lenCardMiddle: number;
    gap: number;
    scale: number;
    list: any[]
}


const Scroll: React.FC<MovieListProps> = ({
    lenCardDesktop = 7,
    lenCardMiddle = 5,
    lenCardMobile = 3,
    gap,
    list
}) => {

    const ScrollItem:React.FC<ScrollItemProps> = () => {
        return (
            <div>

            </div>
        )
    }

    const movieList = useMemo(() => {
        return list;
    }, [list]);

    const [isMobile, widthCard, getNextOffset] = useScroll(lenCardDesktop, lenCardMiddle, lenCardMobile, gap, movieList)
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
