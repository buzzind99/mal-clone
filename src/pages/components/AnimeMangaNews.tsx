import Image from "next/image";
import newsData from "./dummy_data/newsData.json" assert { type: "json" };

const AnimeMangaNews: React.FC = () => {
  const dummyData = newsData.data;

  return (
    <article id="anime-manga-news" className="font-[Verdana] text-[0.75rem]">
      <div
        id="anime-manga-news_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">
          Anime & Manga News {"{this is a placeholder, links are external}"}
        </h2>
        <a
          href="https://myanimelist.net/news"
          target="https://myanimelist.net/news"
          className="float-right pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </a>
      </div>
      <div id="anime-manga-news_content" className="flex-col">
        {dummyData.map((data) => (
          <div
            id={`anime-manga-news_content-${data.id}`}
            key={data.id}
            className="mt-[0.375rem] flex border-b-[1px] border-[#e5e7eb] pb-[0.375rem]"
          >
            <a
              href={data.news_url}
              target={data.news_url}
              className="cursor-pointer"
            >
              <Image
                src={data.image_url}
                alt={data.news_title}
                width={50}
                height={70}
                loading="lazy"
                className="h-[4.5rem] min-w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
              />
            </a>
            <div className="ml-2 inline-block w-full text-[0.6875rem]">
              <h3 className="pb-[0.1875rem] font-bold text-[#1c439b] hover:underline">
                <a
                  href={data.news_url}
                  target={data.news_url}
                  title={data.news_title}
                >
                  {data.news_title}
                </a>
              </h3>
              <p>
                {`${data.news_description} `}
                <a
                  href={data.news_url}
                  className="inline-block text-[#1c439b] hover:underline"
                >
                  read more
                </a>
              </p>
              <p className="mt-[0.375rem] text-[#808080]">
                {`${data.time_since_posted} by `}
                <a
                  href={data.author_url}
                  target={data.author_url}
                  className="inline-block text-[#1c439b] hover:underline"
                >
                  {`${data.author}`}
                </a>
                {` | `}
                <a
                  href={data.forum_url}
                  target={data.forum_url}
                  className="inline-block text-[#1c439b] hover:underline"
                >
                  {`Discuss (${data.comment_count} comments)`}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default AnimeMangaNews;
