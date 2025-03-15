import { ScrollContainer } from "../components/Main/ScrollContainer";
import MovieListContainer from "../components/Main/MovieListContainer.tsx";
import MovieItem from "../components/Main/MovieItem.tsx";
import MoviePosterBig from "../components/Main/MoviePosterBig.tsx";
import {IMovieList} from "../types/common.ts";
import {AdaptiveProviderResolutions} from "../providers/AdaptiveProvider.tsx";

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


const Main = () => {
    return (
        <>
                <MovieListContainer>
                    <ScrollContainer lenCardMobile={3} lenCardDesktop={7} lenCardMiddle={5} gap={10} scale={1}>
                        {initMovieList.map((movie) => (<ScrollContainer.ScrollItem key={movie.name}>
                            <MovieItem name={movie.name} url={movie.url}></MovieItem>
                        </ScrollContainer.ScrollItem>))}
                    </ScrollContainer>
                </MovieListContainer>
                <MoviePosterBig></MoviePosterBig>
</>
)
    ;
};

export default Main;
