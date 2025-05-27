import {useMobile} from "./common.ts";
import React, {useEffect, useRef, useState} from "react";
import {useImmer} from "use-immer";
import calculateWidth, {identifyDevice} from "../utils/common.ts";
import {breakPoints} from "./typesHooks.ts";

interface ICardInfo {
    lenCardInList: number;
    offset: number;
    lenVisibleCard: number;
    remainingCard: number;
    flippedCard: number;
}

export default function useScroll(
    breakpoints: breakPoints[],
    gap: number,
    list: any[],
    scrollContainer: React.RefObject<HTMLDivElement | null>,
): [number, boolean, (variant: "positive" | "negative") => number, number] {
    const isMobile = useMobile();
    const scrollRefContainer = scrollContainer;
    const [widthCard, setWidthCard] = useState<number>(124);
    const [cardScrollInfo, setCardScrollInfo] = useImmer<ICardInfo>({
        lenCardInList: list.length,
        offset: 0,
        lenVisibleCard: 3,
        remainingCard: 0,
        flippedCard: 0,
    });
    const latestScrollInfo = useRef(cardScrollInfo.lenVisibleCard);
    const breakPointsRef = useRef(breakpoints)

    useEffect(() => {
        latestScrollInfo.current = cardScrollInfo.lenVisibleCard;
    }, [cardScrollInfo.lenVisibleCard]);

    useEffect(() => {
        function handleResize() {
            const currentBreakPoint = identifyDevice(
                breakPointsRef.current,
                window.innerWidth
            );
            if (scrollRefContainer?.current) {
                setWidthCard(
                    calculateWidth(
                        latestScrollInfo.current,
                        scrollRefContainer.current.clientWidth,
                        gap
                    )
                );
            }
            const nextCardType = currentBreakPoint.lenVisibleCard

            setCardScrollInfo((draft) => {
                draft.lenVisibleCard = nextCardType;
                draft.remainingCard = draft.lenCardInList - nextCardType;
                draft.flippedCard = 0;
                draft.offset = 0;
            });
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [cardScrollInfo.lenVisibleCard, gap,scrollRefContainer, setCardScrollInfo]);

    function getNumberWithMaxValue(a: number, b: number, maxNumber: number) {
        return Math.min(maxNumber, Math.max(0, a + maxNumber - b));
    }

    function getNextOffset(variant: "positive" | "negative") {
        let cardNeedMoved = 0;

        if (variant === "positive") {
            cardNeedMoved = getNumberWithMaxValue(
                cardScrollInfo.remainingCard,
                cardScrollInfo.lenVisibleCard,
                cardScrollInfo.lenVisibleCard,
            );
        } else {
            cardNeedMoved = -getNumberWithMaxValue(
                cardScrollInfo.flippedCard,
                cardScrollInfo.lenVisibleCard,
                cardScrollInfo.lenVisibleCard,
            );
        }
        let nextOffset = 0
        nextOffset = cardNeedMoved * (widthCard)
        setCardScrollInfo((draft) => {
            draft.remainingCard -= cardNeedMoved;
            draft.flippedCard += cardNeedMoved;
        });
        setCardScrollInfo((draft) => {
            draft.offset += nextOffset
        })
        return nextOffset;
    }
    return [widthCard, isMobile, getNextOffset, cardScrollInfo.offset];
}
