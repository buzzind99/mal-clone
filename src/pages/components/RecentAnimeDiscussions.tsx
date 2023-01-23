import discussionsData from "./dummy_data/discussionsData.json" assert { type: "json" };

const RecentAnimeDiscussions: React.FC = () => {
  const data = discussionsData.data;

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
          Recent Anime Discussions {"{this is a dummy, links are external}"}
        </h2>
        <a
          href="https://myanimelist.net/forum/"
          target="https://myanimelist.net/forum/"
          className="float-right pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </a>
      </div>
      <div id="anime-manga-news_content" className="flex-col">
        {data.map((data) => (
          <div
            id={`recent-anime-discussions_content-${data.id}`}
            key={data.id}
            className="mt-[0.375rem] flex-col border-b-[1px] border-[#e5e7eb] pb-[0.375rem] text-[0.6875rem]"
          >
            <h3 className="mb-[0.375rem] font-bold text-[#1c439b] hover:underline">
              <a href={data.url} target={data.url} title={data.title}>
                {data.title}
              </a>
            </h3>
            <p className="text-[#808080]">
              by{" "}
              <a
                href={data.author_url}
                className="text-[#1c439b] hover:underline"
              >
                {data.author}
              </a>{" "}
              &#40;{data.replies} replies&#41;
            </p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default RecentAnimeDiscussions;
