import { INewsData } from "@/types/interfaces";
import Image from "next/image";

interface Props {
  newsData: INewsData[];
  id: number;
  title_url: string;
}

const AnimeNews: React.FC<Props> = ({ newsData, id, title_url }) => {
  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="recent-news" className="mb-5 font-[Verdana] text-[0.75rem]">
      <div
        id="recent-news_header"
        className="mb-2 flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">
          <span>
            Recent News
            <span className="opacity-40">
              {` (this is a placeholder, links are external)`}
            </span>
          </span>
        </h2>
        <div
          onClick={() =>
            openInNewTab(
              `https://myanimelist.net/anime/${id}/${title_url}/news`
            )
          }
          className="float-right mb-2 cursor-pointer pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          More news
        </div>
      </div>
      <div id="recent-news_content" className="flex-col">
        {newsData &&
          newsData.length &&
          newsData.map((data) => (
            <div
              id={`recent-news_content-${data.id}`}
              key={data.id}
              className="mt-[0.375rem] flex border-b-[1px] border-[#e5e7eb] pb-[0.375rem]"
            >
              <a href={data.news_url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={data.image_url}
                  alt={data.news_title}
                  width={50}
                  height={70}
                  loading="lazy"
                  className="h-[4.5rem] min-w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
                />
              </a>
              <div className="ml-2 inline-block text-[0.6875rem]">
                <h3 className="pb-[0.1875rem] font-bold text-[#1c439b]">
                  <a
                    href={data.news_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={data.news_title}
                    className="hover:underline"
                  >
                    {data.news_title}
                  </a>
                </h3>
                <div>
                  {`${data.news_description} `}
                  <div
                    onClick={() => openInNewTab(data.news_url)}
                    className="inline-block cursor-pointer text-[#1c439b] hover:underline"
                  >
                    read more
                  </div>
                </div>
                <p className="mt-[0.375rem] text-[#808080]">
                  {`${data.time_since_posted} by `}
                  <a
                    href={data.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#1c439b] hover:underline"
                  >
                    {`${data.author}`}
                  </a>
                  {` | `}
                  <a
                    href={data.forum_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#1c439b] hover:underline"
                  >
                    {`Discuss (${data.comment_count} comments)`}
                  </a>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AnimeNews;
