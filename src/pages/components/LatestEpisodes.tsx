import Image from "next/image";
import styles from "@/styles/LatestEpisodes.module.css";
import { useEffect, useMemo, useState } from "react";
import { ILatestEpisodesData } from "@/types/interfaces";

const initialData = [
  {
    id: 0,
    anime: "",
    anime_url: "",
    image_url: "",
    episodes: [
      {
        episode: 0,
        paid: false,
      },
    ],
  },
];

interface Props {
  latestEpisodesData: ILatestEpisodesData[];
}

const LatestEpisodes: React.FC<Props> = ({ latestEpisodesData }) => {
  interface SlideStyle {
    marginLeft: string;
    transition?: string;
  }

  const dummyData = latestEpisodesData || initialData;

  const slideState = useMemo(
    () => [
      [...dummyData.slice(16, 20), ...dummyData.slice(0, 11)],
      [...dummyData.slice(0, 15)],
      [...dummyData.slice(4, 19)],
      [...dummyData.slice(8, 20), ...dummyData.slice(0, 3)],
      [...dummyData.slice(12, 20), ...dummyData.slice(0, 7)],
    ],
    [dummyData]
  );

  const [childHover, setChildHover] = useState({});
  const [direction, setDirection] = useState("");
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [animeList, setAnimeList] = useState(slideState[0]);
  const [slideStyle, setSlideStyle] = useState<SlideStyle>({
    marginLeft: "-29rem",
  });

  const slideHandler = (direction: string) => {
    setIsDisabled(true);
    if (direction === "right") {
      setDirection("right");
      setSlideStyle({
        marginLeft: "-58rem",
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
      setSlideStyle({ marginLeft: "-29rem" });
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
    <article id="latest-episodes" className="font-[Verdana] text-[0.75rem]">
      <div
        id="latest-episodes_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">{"Latest Updated Episode Videos"}</h2>
        <div
          onClick={() => openInNewTab("https://myanimelist.net/watch/episode")}
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
            <div key={data.id} className="mr-2 inline-block max-w-[6.75rem]">
              <div
                onClick={() => openInNewTab(data.anime_url)}
                className={`relative inline-block cursor-pointer transition-all duration-300 ease-[ease-in-out] hover:opacity-80`}
                style={childHover}
              >
                <div
                  className={`${styles.bg_anime} absolute bottom-0 w-full pt-[1.4375rem] text-[0.65625rem] leading-tight tracking-tighter text-white hover:opacity-100`}
                  onMouseEnter={() => setChildHover({ opacity: 1 })}
                  onMouseLeave={() => setChildHover({})}
                >
                  {data.episodes.map((ep) => (
                    <div
                      key={ep.episode}
                      onClick={() =>
                        openInNewTab(`${data.anime_url}/episode/${ep.episode}`)
                      }
                      className="mb-[0.125rem] block w-full py-[1px] px-[0.3rem] transition-all duration-300 ease-[ease-in-out] hover:bg-[rgba(255,255,255,.3)]"
                    >
                      {`Episode ${ep.episode}`}
                      {ep.paid && <span className={`${styles.bg_paid} ml-1`} />}
                    </div>
                  ))}
                </div>
                <Image
                  src={data.image_url}
                  alt={data.anime}
                  width={108}
                  height={163}
                  className="h-[10.1875rem] w-[6.75rem] object-cover"
                />
              </div>
              <h3 className="mx-[0.15rem] block overflow-hidden text-[0.65625rem] leading-none tracking-tight text-[#1c439b] hover:underline">
                <a
                  title={data.anime}
                  href={data.anime_url}
                  target="_blank"
                  rel="noopener noreferrer"
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

export default LatestEpisodes;
