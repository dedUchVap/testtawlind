import "react";
import MovieList from "../components/Main/Scroll.tsx";
import {
  AdaptiveProviderResolutions,
  MobileProviderAdaptive,
} from "../providers/AdaptiveProvider.tsx";
import MobileDetect from "mobile-detect";
import MoviePosterBig from "../components/Main/MoviePosterBig.tsx";

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
          <MovieList lenCardMobile={2} lenCardDesktop={7} lenCardMiddle={5} gap={10} scale={1}></MovieList>

          <MoviePosterBig></MoviePosterBig>
        </MobileProviderAdaptive.Provider>
      </AdaptiveProviderResolutions.Provider>
    </>
  );
};

export default Main;
