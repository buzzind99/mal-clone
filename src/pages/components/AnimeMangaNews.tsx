import Image from "next/image";
import { INewsData } from "../../types/interfaces";

const initialData = [
  {
    id: 0,
    image_url: "",
    news_title: "",
    news_url: "",
    news_description: "",
    time_since_posted: "",
    author: "",
    author_url: "",
    forum_url: "",
    comment_count: 0,
  },
];

interface Props {
  newsData: INewsData[];
}

const AnimeMangaNews: React.FC<Props> = ({ newsData }) => {
  const dummyData = newsData || initialData;

  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article id="anime-manga-news" className="font-[Verdana] text-[0.75rem]">
      <div
        id="anime-manga-news_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">
          Anime & Manga News {"{this is a placeholder, links are external}"}
        </h2>
        <div
          onClick={() => openInNewTab("https://myanimelist.net/news")}
          className="float-right cursor-pointer pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </div>
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
              target="_blank"
              rel="noopener noreferrer"
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
    </article>
  );
};

export default AnimeMangaNews;
