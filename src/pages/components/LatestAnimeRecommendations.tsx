import Image from "next/image";
import Link from "next/link";
import { IRecommendationsData } from "@/types/interfaces";

interface Props {
  recommendationsData: IRecommendationsData[];
}

const LatestAnimeRecommendations: React.FC<Props> = ({
  recommendationsData,
}) => {
  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const readMore = (desc: string) => {
    const match = desc.match(/\.{3}$/);
    return !!match;
  };

  return (
    <article
      id="latest-anime-recommendations"
      className="font-[Verdana] text-[0.75rem]"
    >
      <div
        id="latest-anime-recommendations_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">
          Latest Anime Recommendations
          <span className="opacity-40">{` (this is a placeholder, links are external)`}</span>
        </h2>
        <div
          onClick={() =>
            openInNewTab(
              "https://myanimelist.net/recommendations.php?s=recentrecs&t=anime"
            )
          }
          className="float-right cursor-pointer pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </div>
      </div>
      <div id="latest-anime-recommendations_content" className="flex-col"></div>
      {recommendationsData &&
        recommendationsData.length &&
        recommendationsData.map((data) => (
          <div
            id={`latest-anime-recommendations_content-${data.id}`}
            key={data.id}
            className="mt-[0.375rem] border-b-[1px] border-[#e5e7eb] pb-[0.375rem] text-[0.6875rem]"
          >
            <div className="inline-block w-[50%]">
              <div className="flex">
                <Link
                  href={data.anime_url.replace("https://myanimelist.net", "")}
                >
                  <Image
                    src={data.image_url}
                    alt={data.anime}
                    width={50}
                    height={70}
                    className="h-[4.5rem] min-w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
                  />
                </Link>
                <div className="ml-2">
                  <p className="mt-[0.2rem]">If you liked</p>
                  <Link
                    href={data.anime_url.replace("https://myanimelist.net", "")}
                    className="font-bold text-[#1c439b]"
                  >
                    <h3
                      title={data.anime}
                      className="mt-1 w-fit cursor-pointer hover:underline"
                    >
                      {data.anime}
                    </h3>
                  </Link>
                  <div className="mt-[0.375rem] h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] px-[0.225rem] pt-[0.05rem] text-[0.625rem] tracking-tighter text-[#1c439b] transition-all duration-300 hover:text-white">
                    add
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block w-[50%]">
              <div className="flex">
                <Link
                  href={data.anime_rec_url.replace(
                    "https://myanimelist.net",
                    ""
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={data.image_rec_url}
                    alt={data.anime_rec}
                    width={50}
                    height={70}
                    className="h-[4.5rem] min-w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
                  />
                </Link>
                <div className="ml-2">
                  <p className="mt-[0.2rem]">...then you might like</p>
                  <Link
                    href={data.anime_rec_url.replace(
                      "https://myanimelist.net",
                      ""
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#1c439b]"
                  >
                    <h3
                      title={data.anime_rec}
                      className="mt-1 w-fit cursor-pointer hover:underline"
                    >
                      {data.anime_rec}
                    </h3>
                  </Link>
                  <div className="mt-[0.375rem] h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] px-[0.225rem] pt-[0.05rem] text-[0.625rem] tracking-tighter text-[#1c439b] transition-all duration-300 hover:text-white">
                    add
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[0.2rem]">
              {`${data.description} `}
              {readMore(data.description) && (
                <div
                  onClick={() =>
                    openInNewTab(
                      "https://myanimelist.net/recommendations.php?s=recentrecs&t=anime"
                    )
                  }
                  className="inline-block cursor-pointer text-[#1c439b] hover:underline"
                >
                  read more
                </div>
              )}
            </div>
            <div className="mt-[0.225rem] flex items-center leading-relaxed text-[#808080]">
              <p>
                {`Anime rec by `}
                <a
                  href={data.user_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c439b] hover:underline"
                >
                  {data.user}
                </a>
                {` - ${data.time_since_posted}`}
              </p>
            </div>
          </div>
        ))}
    </article>
  );
};

export default LatestAnimeRecommendations;
