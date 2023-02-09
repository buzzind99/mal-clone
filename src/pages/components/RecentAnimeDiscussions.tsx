import { IDiscussionsData } from "@/types/interfaces";

interface Props {
  discussionsData: IDiscussionsData[];
}

const RecentAnimeDiscussions: React.FC<Props> = ({ discussionsData }) => {
  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      id="recent-anime-discussions"
      className="font-[Verdana] text-[0.75rem]"
    >
      <div
        id="recent-anime-discussions_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">
          Recent Anime Discussions
          <span className="opacity-40">{` (this is a placeholder, links are external)`}</span>
        </h2>
        <div
          onClick={() => openInNewTab("https://myanimelist.net/forum/")}
          className="float-right cursor-pointer pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </div>
      </div>
      <div id="anime-manga-news_content" className="flex-col">
        {discussionsData &&
          discussionsData.length &&
          discussionsData.map((data) => (
            <div
              id={`recent-anime-discussions_content-${data.id}`}
              key={data.id}
              className="mt-[0.375rem] flex-col border-b-[1px] border-[#e5e7eb] pb-[0.375rem] text-[0.6875rem]"
            >
              <h3 className="mb-[0.375rem] font-bold text-[#1c439b]">
                <a
                  href={data.url}
                  target="_blank"
                  title={data.title}
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {data.title}
                </a>
              </h3>
              <p className="text-[#808080]">
                {"by "}
                <a
                  href={data.author_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c439b] hover:underline"
                >
                  {data.author}
                </a>
                {` ${data.replies} replies`}
              </p>
            </div>
          ))}
      </div>
    </article>
  );
};

export default RecentAnimeDiscussions;
