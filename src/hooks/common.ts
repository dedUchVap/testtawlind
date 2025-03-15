import {useEffect, useState} from "react";
import {MIDLLEWIDTH} from "../consts/const.ts";

function useWidth(callback: () => void) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWidth(window.screen.width);
            callback();
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [callback]);

    return width;
}

export default useWidth;

export function useMobile() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        setIsMobile(window.innerWidth < MIDLLEWIDTH);

        function handleResize() {
            const width = window.innerWidth;
            if (width < MIDLLEWIDTH) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
}
