import Image from "next/image";
import VideoPortal from "@/components/VideoPortal";
import { useState } from "react";
import { IAnimeData } from "@/types/interfaces";

interface Props {
  animeData: IAnimeData;
}

const AnimeMainStats: React.FC<Props> = ({ animeData }) => {
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const animeTypeBorder =
    animeData && animeData.studios.length ? "border-r-[1px]" : "";

  const onShowModalChangeHandler = (value: boolean) => {
    setShowModal(value);
  };

  const showVideoModalHandler = (url: string) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <VideoPortal
          url={videoUrl}
          onShowModalChange={onShowModalChangeHandler}
        />
      )}
      <div id="main-stats" className="mb-5 flex justify-between">
        <div
          id="main-stats_left"
          className="w-full min-w-[36.5625rem] tracking-tighter text-[#323232]"
        >
          <div
            id="main-stats_top"
            className="w-full rounded-[1px] border-[1px] border-[#e5e5e5] bg-[#f8f8f8] py-2 px-[0.625rem]"
          >
            <div
              id="main-stats_score"
              className="my-[0.24rem] inline-block border-r-[1px] border-[#d8d8d8] pr-4 text-center"
            >
              <div className="w-[3.75rem] rounded-[2px] bg-[#2e51a2] text-[0.625rem] text-white">
                SCORE
              </div>
              <div className="mt-[0.4rem] text-[1.5rem] font-bold  leading-none">
                {animeData && animeData.score ? animeData.score : "N/A"}
              </div>
              <div className="text-[0.625rem]">{`${
                animeData && animeData.scored_by
                  ? new Intl.NumberFormat("en").format(+animeData.scored_by)
                  : "-"
              } users`}</div>
            </div>
            <div
              id="main-stats_stats"
              className="ml-4 inline-block justify-between"
            >
              <div id="main-stats_stats-top" className="mb-4">
                <div className="mr-5 inline-block">
                  Ranked
                  <span className="font-bold">{` #${
                    animeData && animeData.rank ? animeData.rank : "N/A"
                  }`}</span>
                </div>
                <div className="mr-5 inline-block">
                  Popularity
                  <span className="font-bold">{` #${
                    animeData && animeData.popularity
                      ? animeData.popularity
                      : "N/A"
                  }`}</span>
                </div>
                <div className="mr-5 inline-block">
                  Members
                  <span className="font-bold">{` ${
                    animeData && animeData.members
                      ? new Intl.NumberFormat("en").format(+animeData.members)
                      : "N/A"
                  }`}</span>
                </div>
              </div>
              <div
                id="main-stats_stats-bottom"
                className="flex text-[0.625rem] text-[#1c439b]"
              >
                {animeData && animeData.season && animeData.year && (
                  <span className="mr-3 cursor-pointer self-center border-r-[1px] border-[#bebebe] pr-3 hover:underline">
                    {animeData.season.charAt(0).toUpperCase() +
                      animeData.season.slice(1)}{" "}
                    {animeData.year}
                  </span>
                )}
                {animeData && animeData.type && (
                  <span
                    className={`mr-3 cursor-pointer self-center border-[#bebebe] pr-3 hover:underline ${animeTypeBorder}`}
                    style={{}}
                  >
                    {animeData.type}
                  </span>
                )}
                {animeData && !!animeData.studios.length && (
                  <span className="mr-3 cursor-pointer self-center pr-3">
                    {animeData.studios.length > 1 &&
                      animeData.studios
                        .slice(0, animeData.studios.length - 1)
                        .map((studio) => (
                          <div key={studio.name} className="inline-block">
                            <span className="hover:underline">
                              {studio.name}
                            </span>
                            ,&nbsp;
                          </div>
                        ))}
                    {animeData.studios.length > 1 && (
                      <span className="cursor-pointer text-[#1c439b] hover:underline">
                        {animeData.studios[animeData.studios.length - 1].name}
                      </span>
                    )}
                    {animeData.studios.length === 1 && (
                      <span>{animeData.studios[0].name}</span>
                    )}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div id="main-stats_bottom" className="mt-2">
            <div className="flex w-full items-center rounded-[1px] border-[1px] border-[#e5e5e5] bg-[#f8f8f8] py-[0.375rem] px-[0.625rem]">
              <div
                title="Dummy button"
                className="mr-2 flex h-[1.5625rem] w-[5.625rem] cursor-pointer items-center rounded-[4px] bg-[#4f74c8] px-2 pt-[0.15rem] text-[0.6875rem] tracking-tight text-white transition-opacity duration-300 ease-[ease-in-out] hover:opacity-80"
              >
                <span className="mb-[0.15rem] mr-1 flex h-[0.6875rem] w-[0.6875rem] items-center justify-center rounded-[2px] bg-white pb-[0.05rem] text-[0.5rem] leading-none text-[#4f74c8]">
                  +
                </span>
                Add to list
              </div>
              <div className="mr-2 flex h-[1.4375rem] w-[8.625rem] items-center justify-between rounded-[4px] border-[1px] border-[#bebebe] bg-white px-2 text-[#2e51a2] opacity-50">
                <div className="flex items-center">
                  <Image
                    src="/star-icon.png"
                    alt="star-icon"
                    width={14}
                    height={14}
                    className="mr-1 inline-block object-cover"
                  />
                  <span className="py-[0.1rem] text-[0.6875rem] leading-none">{`(9) Great`}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="0.6rem"
                  fill="#2e51a2"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              <div className="flex h-[1.4375rem] w-[8.625rem] items-center justify-between rounded-[4px] border-[1px] border-[#bebebe] bg-white px-2 text-[#2e51a2] opacity-50">
                <span className="py-[0.1rem] text-[0.6875rem] leading-none text-[#323232]">
                  {`Episodes:`}
                </span>
                <div className="flex items-center">
                  <span className="mr-1 text-[0.6875rem] leading-none tracking-tight">{`0/${
                    animeData ? animeData.episodes : "1"
                  }`}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="0.7rem"
                    fill="#2e51a2"
                    className="pt-[0.05rem]"
                  >
                    <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-1 text-[0.625rem] tracking-normal text-[#b25959]">{`* Your list is public by default.`}</div>
          </div>
        </div>
        {animeData && animeData.trailer.embed_url && (
          <div id="main-stats_right" className="ml-2 min-w-[12.5rem]">
            <div
              id="trailer"
              onClick={showVideoModalHandler.bind(
                null,
                animeData.trailer.embed_url || ""
              )}
              className="relative h-[8.3125rem] cursor-pointer transition-opacity duration-300 ease-[ease-in-out] hover:opacity-80"
            >
              <Image
                src={
                  animeData.trailer.images.medium_image_url ||
                  "/image-placeholer-vertical.webp"
                }
                alt="anime-trailer"
                width={200}
                height={133}
                className="inline-block h-[8.3125rem] w-[12.5rem] object-cover"
              />
              <span
                className="absolute bottom-0 left-0 h-[25%] w-full bg-[url(/image_box_shadow_bottom.png)]"
                style={{ backgroundSize: "100% 100%" }}
              />
              <span
                className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-normal px-[0.3rem] py-[0.225rem] text-[0.8125rem] leading-none tracking-tighter text-white"
                style={{ textShadow: "rgb(0 0 0 / 80%) 1px 1px 0" }}
              >
                Trailer
              </span>
              <span
                className="absolute top-[40%] left-[35%] h-[1.5625rem] w-[3.75rem]"
                style={{
                  background: "url(/btn_stream_play.png)",
                  backgroundSize: "3.75rem auto",
                }}
              ></span>
            </div>
            <div className="float-right mt-1 w-fit cursor-pointer text-[0.6875rem] text-[#1c439b] hover:underline">
              More videos
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AnimeMainStats;
