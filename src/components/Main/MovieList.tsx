import "react";
import MovieItem from "./MovieItem.tsx";
import classes from "./MovieList.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { IMovieList } from "../../types/common.ts";
import { Col, Container, Row } from "react-bootstrap";
import * as React from "react";
import calculateWidth, { identifyDevice } from "../../utils/common.ts";
import useWidth from "../../hooks/common.ts";
import {
  AdaptiveProviderResolutions,
  MobileProviderAdaptive,
} from "../../providers/AdaptiveProvider.tsx";
import ScrollButton from "../UI/ScrollButton.tsx";
import { useImmer } from "use-immer";

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

interface MovieListProps {
  lenCardMobile: number;
  lenCardDesktop: number;
  lenCardMiddle: number;
  gap: number;
  scale: number;
}

interface ICardInfo {
  lenCardInList: number;
  offset: number;
  lenVisibleCard: number;
  remainingCard: number;
  flippedCard: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MovieList: React.FC<MovieListProps> = ({
  lenCardDesktop = 7,
  lenCardMiddle = 5,
  lenCardMobile = 3,
  gap,
}) => {
  const isMobile = useContext(MobileProviderAdaptive);
  const [movieList] = useState(initMovieList);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const scrollRefContainer = useRef<HTMLDivElement>(null);
  const [widthCard, setWidthCard] = useState(124);
  const [cardScrollInfo, setCardScrollInfo] = useImmer<ICardInfo>({
    lenCardInList: movieList.length,
    offset: 0,
    lenVisibleCard: 3,
    remainingCard: 0,
    flippedCard: 0
  });
  const lastChildRef = useRef<HTMLDivElement>(null);
  const resolutions = identifyDevice(
    useContext(AdaptiveProviderResolutions),
    window.innerWidth,
  );

  useWidth(() => setWidth(window.innerWidth));

  useEffect(() => {
    setCardScrollInfo((draft) => {
      draft.offset = 0;
    });
    let nextCardType = 0;
    switch (resolutions) {
      case 1024:
        nextCardType = lenCardDesktop;
        break;
      case 768:
        nextCardType = lenCardMiddle;
        break;
      case 500:
        nextCardType = lenCardMobile;
        break;
    }
    setCardScrollInfo((draft) => {
      draft.lenVisibleCard = nextCardType;
      draft.remainingCard = draft.lenCardInList - nextCardType;
    });
    if (scrollRefContainer.current) {
      setWidthCard(
        calculateWidth(
          nextCardType,
          scrollRefContainer.current.clientWidth,
          gap,
        ),
      );
    }
  }, [
    gap,
    resolutions,
    lenCardDesktop,
    lenCardMiddle,
    lenCardMobile,
    isMobile,
  ]);

  function getNextOffset(variant: "positive" | "negative") {
    let nextOffset = 0;
    console.log(cardScrollInfo.remainingCard);
    if (variant === "positive") {
      if (
        cardScrollInfo.remainingCard - cardScrollInfo.lenVisibleCard >
        cardScrollInfo.lenVisibleCard
      ) {
        nextOffset =
          widthCard * cardScrollInfo.lenVisibleCard +
          gap * cardScrollInfo.lenVisibleCard;
        setCardScrollInfo((draft) => {
          draft.remainingCard -= draft.lenVisibleCard;
          draft.flippedCard += draft.lenVisibleCard
        });
      } else {
        setCardScrollInfo((draft) => {
          draft.remainingCard = 0;
          draft.flippedCard = draft.lenCardInList - draft.lenVisibleCard
        });
        nextOffset =
          widthCard * cardScrollInfo.remainingCard +
          gap * cardScrollInfo.remainingCard;
      }
    } else {
      if (cardScrollInfo.flippedCard >= 7){
        nextOffset = -(widthCard * cardScrollInfo.lenVisibleCard + (gap * cardScrollInfo.lenVisibleCard))
        setCardScrollInfo(draft => {
          draft.remainingCard += draft.lenVisibleCard
          draft.flippedCard -= draft.lenVisibleCard
        })
      }
      else {
        nextOffset = -(widthCard * cardScrollInfo.flippedCard + (gap * cardScrollInfo.lenVisibleCard))
        setCardScrollInfo(draft => {
          draft.remainingCard += draft.lenVisibleCard
          draft.flippedCard -= draft.lenCardInList - draft.lenVisibleCard - draft.remainingCard
      })
    }
    console.log(nextOffset);
    return nextOffset;
  }

  function handleClick(variant: "positive" | "negative") {
    const nextOffset = getNextOffset(variant);
    setCardScrollInfo((draft) => {
      draft.offset += nextOffset;
    });
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
              <ScrollButton
                classProps={classes.visible_button}
                handleClick={handleClick}
                variant={"negative"}
              />
              <div className={classes.name_list}>Хиты прошлых лет</div>
              <div
                ref={scrollRefContainer}
                className={classes.movie}
                style={{ gap: gap }}
              >
                {movieList.map((el, index) => (
                  <MovieItem
                    ref={lastChildRef}
                    stylesCard={{
                      width: widthCard,
                      flexBasis: widthCard,
                      transform: `translateX(${-cardScrollInfo.offset}px)`,
                      transition: `all ${index / 10 + 0.1}s`,
                    }}
                    key={el.name}
                    name={el.name}
                    url={el.url}
                  />
                ))}
              </div>
              <ScrollButton
                classProps={classes.visible_button}
                variant={"positive"}
                handleClick={handleClick}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieList;
