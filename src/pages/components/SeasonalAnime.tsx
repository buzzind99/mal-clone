import Image from "next/image";
import styles from "@/styles/SeasonalAnime.module.css";
import { useEffect, useMemo, useState } from "react";
import { ISeasonalAnimeData } from "@/types/interfaces";

const initialData = [{ id: 0, anime: "", anime_url: "", image_url: "" }];

interface Props {
  seasonalAnimeData: ISeasonalAnimeData[];
}

const SeasonalAnime: React.FC<Props> = ({ seasonalAnimeData }) => {
  interface SlideStyle {
    marginLeft: string;
    transition?: string;
  }

  const dummyData = seasonalAnimeData || initialData;

  const slideState = useMemo(() => [
    [...dummyData.slice(16, 20), ...dummyData.slice(0, 9)],
    [...dummyData.slice(0, 13)],
    [...dummyData.slice(4, 17)],
    [...dummyData.slice(8, 20), ...dummyData.slice(0, 1)],
    [...dummyData.slice(12, 20), ...dummyData.slice(0, 5)],
  ], [dummyData]);

  const [slideStyle, setSlideStyle] = useState<SlideStyle>({
    marginLeft: "-41.5rem",
  });
  const [direction, setDirection] = useState("");
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [animeList, setAnimeList] = useState(slideState[0]);

  const slideHandler = (direction: string) => {
    setIsDisabled(true);
    if (direction === "right") {
      setDirection("right");
      setSlideStyle({
        marginLeft: "-83rem",
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
      setSlideStyle({ marginLeft: "-41.5rem" });
      setIsDisabled(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [counter, slideState]);

  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article id="seasonal-anime" className="font-[Verdana] text-[0.75rem]">
      <div
        id="seasonal-anime_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">{"Winter 2023 Anime"}</h2>
        <div
          onClick={() => openInNewTab("https://myanimelist.net/anime/season")}
          className="float-right cursor-pointer pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </div>
      </div>
      <div
        id="seasonal-anime_content"
        className="group relative mt-1 overflow-hidden whitespace-nowrap"
      >
        <button
          title="Previous"
          className={`${styles.bg_button_left} ease[ease-in-out] transition-all duration-300 group-hover:translate-x-[2.5625rem] group-hover:opacity-100`}
          onClick={slideHandler.bind(null, "left")}
          disabled={isDisabled}
        />
        <button
          title="Next"
          className={`${styles.bg_button_right} transition-all duration-300 ease-[ease-in-out] group-hover:translate-x-[-2.5rem] group-hover:opacity-100`}
          onClick={slideHandler.bind(null, "right")}
          disabled={isDisabled}
        />
        <div id="seasonal-anime_slider-container" style={slideStyle}>
          {animeList.map((data) => (
            <a
              key={data.id}
              href={data.anime_url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "relative mr-[0.375rem] inline-block h-[13.75rem] w-[10rem] transition-all duration-300 ease-[ease-in-out] hover:opacity-70"
              }
            >
              <h3 className="flex justify-center text-[0.65625rem] leading-tight tracking-tighter text-white">
                <span
                  className={`${styles.bg_anime} absolute bottom-0 w-[9.875rem] overflow-hidden whitespace-normal px-[0.3rem] pb-[0.225rem] pt-4`}
                >
                  {data.anime}
                </span>
              </h3>
              <Image
                src={data.image_url}
                alt={data.anime}
                width={160}
                height={220}
                className="h-[13.75rem] w-[10rem] border-[1px] border-[#e5e5e5] object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SeasonalAnime;
