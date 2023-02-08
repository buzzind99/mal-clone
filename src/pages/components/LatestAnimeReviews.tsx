import { IReviewsData } from "@/types/interfaces";
import Image from "next/image";

interface Props {
  reviewsData: IReviewsData[];
}

const LatestAnimeReviews: React.FC<Props> = ({ reviewsData }) => {
  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      id="latest-anime-reviews"
      className="font-[Verdana] text-[0.75rem]"
    >
      <div
        id="latest-anime-reviews_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">
          {"Latest Anime Reviews {this is a placeholder, links are external}"}
        </h2>
        <div
          onClick={() =>
            openInNewTab("https://myanimelist.net/reviews.php?t=anime")
          }
          className="float-right cursor-pointer pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </div>
      </div>
      <div id="latest-anime-reviews_content" className="flex-col">
        {reviewsData &&
          reviewsData.length &&
          reviewsData.map((data) => (
            <div
              id={`latest-anime-reviews_content-${data.id}`}
              key={data.id}
              className="mt-[0.375rem] flex border-b-[1px] border-[#e5e7eb] pb-[0.375rem]"
            >
              <a
                href={data.anime_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={data.image_url}
                  alt={data.title}
                  width={50}
                  height={70}
                  className="h-[4.5rem] min-w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
                />
              </a>
              <div className="ml-2 inline-block text-[0.6875rem]">
                <h3 className="mr-1 inline-block pb-[0.1875rem] font-bold text-[#1c439b]">
                  <a
                    href={data.anime_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={data.title}
                    className="text-[#1c439b] hover:underline"
                  >
                    {data.title}
                  </a>
                </h3>
                <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] px-[0.225rem] pt-[0.05rem] text-[0.625rem] tracking-tighter text-[#1c439b] transition-all duration-300 hover:text-white">
                  add
                </span>
                <span className="float-right text-[0.625rem] text-[#888]">{`Overall Rating: ${data.score}`}</span>
                <div>
                  {`${data.description} `}
                  <div
                    onClick={() => openInNewTab(data.review_url)}
                    className="inline-block cursor-pointer text-[#1c439b] hover:underline"
                  >
                    read more
                  </div>
                </div>
                {data.preliminary && (
                  <div className="mt-[0.375rem] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      fill="#eeb438"
                      width="12px"
                      className="mr-1 inline-block"
                    >
                      <path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z" />
                    </svg>
                    Preliminary
                  </div>
                )}
                <div className="mt-[0.225rem] flex items-center leading-relaxed text-[#808080]">
                  <p>
                    {`${data.time_since_posted} by `}
                    <a
                      href={data.user_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pr-2 text-[#1c439b] hover:underline"
                    >
                      {data.user}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </article>
  );
};

export default LatestAnimeReviews;
