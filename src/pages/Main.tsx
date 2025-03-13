import "react";
import MovieList from "../components/Main/MovieList.tsx";
import {
  AdaptiveProviderResolutions,
  MobileProviderAdaptive,
} from "../providers/AdaptiveProvider.tsx";
import MobileDetect from "mobile-detect";

const Main = () => {
  return (
    <>
      <AdaptiveProviderResolutions.Provider
        value={{ desktop: 1024, middle: 768, mobile: 500 }}
      >
        <MobileProviderAdaptive.Provider
          value={{
            isMobile: new MobileDetect(window.navigator.userAgent).mobile(),
          }}
        >
          <MovieList
            gap={10}
            lenCardMobile={3}
            lenCardDesktop={7}
            lenCardMiddle={5}
            scale={0}
          />
        </MobileProviderAdaptive.Provider>
      </AdaptiveProviderResolutions.Provider>
    </>
  );
};

export default Main;
