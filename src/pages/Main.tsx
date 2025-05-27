import ScrollContainerMovie from "../components/Main/ScrollContainer.tsx";
import {IMovieList, IMovieBig} from "../types/common.ts";
import BigMovieVideoPoster from "../components/Main/BigMovieVideoPoster.tsx";
import {Container, Row, Col} from "react-bootstrap";
import ScrollContainerBigMovie from "../components/Main/ScrollMovieBigPoster.tsx";
import LinePrettyMbRenameLetter from "../components/Main/LinePrettyMbRenameLetter.tsx";

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

const initBigMoviePoster: IMovieBig[] = [{
    id: 1,
    name: 'Interstellar',
    imgUrl: "https://naked-science.ru/wp-content/uploads/2016/04/article_interstellar-teaser08166921.jpg",
    describe: 'Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.'
},
    {
        id: 2,
        name: 'Interstellar',
        imgUrl: "https://naked-science.ru/wp-content/uploads/2016/04/article_interstellar-teaser08166921.jpg",
        describe: 'Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.'
    },
    {
        id: 3,
        name: 'Interstellar',
        imgUrl: "https://naked-science.ru/wp-content/uploads/2016/04/article_interstellar-teaser08166921.jpg",
        describe: 'Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.'
    },
    {
        id: 4,
        name: 'Interstellar',
        imgUrl: "https://naked-science.ru/wp-content/uploads/2016/04/article_interstellar-teaser08166921.jpg",
        describe: 'Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.'
    },
    {
        id: 5,
        name: 'Interstellar',
        imgUrl: "https://naked-science.ru/wp-content/uploads/2016/04/article_interstellar-teaser08166921.jpg",
        describe: 'Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.'
    }]

const Main = () => {
    return (
        <>
            <BigMovieVideoPoster></BigMovieVideoPoster>
            <LinePrettyMbRenameLetter/>
            <div>
                <Container fluid={'md'}>
                    <Row>
                        <Col xs={12} className={'d-flex align-content-center justify-content-center'}>
                            <div style={{width: '100%', display: "flex", flexDirection: "column"}}>
                                <div style={{fontSize: "32px", fontWeight: 'bold'}}>Подборка классики</div>
                                <div style={{width: '100%'}}>
                                    <ScrollContainerMovie items={initMovieList}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true}>
                    <Row>
                        <ScrollContainerBigMovie items={initBigMoviePoster}></ScrollContainerBigMovie>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div style={{width: '100%', display: "flex", flexDirection: "column"}}>
                                <div style={{fontSize: "32px", fontWeight: 'bold'}}>Подборка классики</div>
                                <div style={{width: '100%'}}>
                                    <ScrollContainerMovie items={initMovieList}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
        ;
};

export default Main;
