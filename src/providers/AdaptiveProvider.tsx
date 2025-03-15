import MobileDetect from "mobile-detect";
import {createContext} from "react";

export const AdaptiveProviderResolutions = createContext({
    desktop: 1024,
    middle: 768,
    mobile: 500,
});

export const MobileProviderAdaptive = createContext({
    isMobile: new MobileDetect(window.navigator.userAgent).mobile(),
});
