import VideoPortal from "@/components/VideoPortal";
import styles from "@/styles/MostPopularTrailers.module.css";
import { IPopularTrailersData } from "@/types/interfaces";
import { useEffect, useMemo, useState } from "react";

const initialData = {
  id: 0,
  anime: "",
  anime_url: "",
  image_url: "",
  video_url: "",
  type: "",
};

interface Props {
  popularTrailersData: IPopularTrailersData[];
}

const MostPopularTrailers: React.FC<Props> = ({ popularTrailersData }) => {
  interface SlideStyle {
    marginLeft: string;
    transition?: string;
  }

  const dummyData = popularTrailersData || initialData;

  const slideState = useMemo(
    () => [
      [...dummyData.slice(12, 15), ...dummyData.slice(0, 8)],
      [...dummyData.slice(0, 11)],
      [...dummyData.slice(3, 14)],
      [...dummyData.slice(6, 15), ...dummyData.slice(0, 2)],
      [...dummyData.slice(9, 15), ...dummyData.slice(0, 5)],
    ],
    [dummyData]
  );

  const [direction, setDirection] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [animeList, setAnimeList] = useState(slideState[0]);
  const [slideStyle, setSlideStyle] = useState<SlideStyle>({
    marginLeft: "-42.75rem",
  });

  const slideHandler = (direction: string) => {
    setIsDisabled(true);
    if (direction === "right") {
      setDirection("right");
      setSlideStyle({
        marginLeft: "-85.5rem",
        transition: "margin 500ms ease-in-out",
      });

      if (counter === 4) {
        setCounter(0);
      } else {
        setCounter((counter) => counter + 1);
      }
    } else if (direction === "left") {
      setDirection("left");
      setSlideStyle({
        marginLeft: "0rem",
        transition: "margin 500ms ease-in-out",
      });

      if (counter === 0) {
        setCounter(4);
      } else {
        setCounter((counter) => counter - 1);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimeList(slideState[counter]);
      setSlideStyle({ marginLeft: "-42.75rem" });
      setIsDisabled(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [counter, slideState]);

  const onShowModalChangeHandler = (value: boolean) => {
    setShowModal(value);
  };

  const showVideoModalHandler = (url: string) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      id="most-popular-trailers"
      className="font-[Verdana] text-[0.75rem]"
    >
      {showModal && (
        <VideoPortal
          url={videoUrl}
          onShowModalChange={onShowModalChangeHandler}
        />
      )}
      <div
        id="most-popular-trailers_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">{"Latest Updated Episode Videos"}</h2>
        <div
          onClick={() =>
            openInNewTab("https://myanimelist.net/watch/promotion/popular")
          }
          className="float-right cursor-pointer pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </div>
      </div>
      <div
        id="latest-episodes_content"
        className="group relative mt-1 overflow-hidden whitespace-nowrap"
      >
        <button
          title="Previous"
          className={`${styles.bg_button_left} ease[ease-in-out] transition-all duration-300 group-hover:translate-x-[1.8125rem] group-hover:opacity-100`}
          onClick={slideHandler.bind(null, "left")}
          disabled={isDisabled}
        />
        <button
          title="Next"
          className={`${styles.bg_button_right} transition-all duration-300 ease-[ease-in-out] group-hover:translate-x-[-1.75rem] group-hover:opacity-100`}
          onClick={slideHandler.bind(null, "right")}
          disabled={isDisabled}
        />
        <div id="latest-episodes_slider-container" style={slideStyle}>
          {animeList.map((data) => (
            <div
              key={data.id}
              className="mr-2 inline-block transition-all duration-300 ease-[ease-in-out] hover:opacity-80 "
            >
              <div
                onClick={showVideoModalHandler.bind(null, data.video_url)}
                className={
                  "relative inline-block transition-all duration-300 ease-[ease-in-out] hover:opacity-80"
                }
              >
                <h3 className="flex justify-center text-[0.65625rem] leading-tight tracking-tighter text-white">
                  <span className={styles.bg_button_play}></span>
                  <span
                    className={`${styles.bg_anime} absolute bottom-0 w-full overflow-hidden whitespace-normal px-[0.3rem] pb-[0.225rem] pt-4`}
                  >
                    {data.type}
                  </span>
                </h3>
                <div
                  className={`h-[7.5rem] w-[13.75rem] bg-cover bg-no-repeat`}
                  style={{ background: `url(${data.image_url})` }}
                />
              </div>
              <h3 className="mx-[0.3rem] block overflow-hidden pb-1 text-[0.65625rem] leading-none tracking-tight text-[#1c439b]">
                <a
                  title={data.anime}
                  href={data.anime_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {data.anime}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default MostPopularTrailers;
