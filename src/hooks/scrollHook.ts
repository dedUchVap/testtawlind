import {useMobile} from "./common.ts";
import React, {useEffect, useRef, useState} from "react";
import {useImmer} from "use-immer";
import calculateWidth, {identifyDevice} from "../utils/common.ts";
import {DEKSTOPWIDTH, MIDLLEWIDTH, MOBILEWIDTH} from "../consts/const.ts";

interface ICardInfo {
    lenCardInList: number;
    offset: number;
    lenVisibleCard: number;
    remainingCard: number;
    flippedCard: number;
}

export default function useScroll(
    lenCardDesktop: number = 7,
    lenCardMiddle: number = 5,
    lenCardMobile: number = 3,
    gap: number,
    list: any[],
    scrollContainer: React.RefObject<HTMLDivElement>,
): [number, boolean, (variant: "positive" | "negative") => number, number] {
    const isMobile = useMobile();
    const scrollRefContainer = scrollContainer;
    const [widthCard, setWidthCard] = useState(124);
    const [cardScrollInfo, setCardScrollInfo] = useImmer<ICardInfo>({
        lenCardInList: list.length,
        offset: 0,
        lenVisibleCard: 3,
        remainingCard: 0,
        flippedCard: 0,
    });
    const latestScrollInfo = useRef(cardScrollInfo.lenVisibleCard);


    useEffect(() => {
        latestScrollInfo.current = cardScrollInfo.lenVisibleCard;
    }, [cardScrollInfo.lenVisibleCard]);

    useEffect(() => {
        function handleResize() {
            const resolutions = identifyDevice(
                {DEKSTOPWIDTH, MIDLLEWIDTH, MOBILEWIDTH},
                window.innerWidth,
            );
            if (scrollRefContainer.current) {
                setWidthCard(
                    calculateWidth(
                        latestScrollInfo.current,
                        scrollRefContainer.current.clientWidth,
                        gap,
                    ),
                );
            }
            let nextCardType = 0;
            console.log("Эффект");
            switch (resolutions) {
                case DEKSTOPWIDTH:
                    nextCardType = lenCardDesktop;
                    break;
                case MIDLLEWIDTH:
                    nextCardType = lenCardMiddle;
                    break;
                case MOBILEWIDTH:
                    nextCardType = lenCardMobile;
                    break;
            }
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
    }, [cardScrollInfo.lenVisibleCard, gap, lenCardDesktop, lenCardMiddle, lenCardMobile,scrollRefContainer, setCardScrollInfo]);

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
        const nextOffset = cardNeedMoved * (widthCard + gap);
        setCardScrollInfo((draft) => {
            draft.remainingCard -= cardNeedMoved;
            draft.flippedCard += cardNeedMoved;
        });
        setCardScrollInfo((draft) => {
            draft.offset += nextOffset
        })
        return nextOffset;
    }
    console.log(cardScrollInfo.offset)
    return [widthCard, isMobile, getNextOffset, cardScrollInfo.offset];
}
