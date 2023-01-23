import Image from "next/image";
import featuredData from "./dummy_data/featuredData.json" assert { type: "json" };

const FeaturedArticles: React.FC = () => {
  const data = featuredData.data;

  return (
    <article id="featured-articles" className="font-[Verdana] text-[0.75rem]">
      <div
        id="recent-anime-discussions_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">
          Featured Articles {"{this is a placeholder, links are external}"}
        </h2>
        <a
          href="https://myanimelist.net/featured"
          target="https://myanimelist.net/featured"
          className="float-right pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </a>
      </div>
      <div id="featured-articles_content" className="flex-col">
        {data.map((data) => (
          <div
            id={`featured-articles_content-${data.id}`}
            key={data.id}
            className="mt-[0.375rem] flex border-b-[1px] border-[#e5e7eb] pb-[0.375rem]"
          >
            <a href={data.url} target={data.url} className="cursor-pointer">
              <Image
                src={data.image_url}
                alt={data.title}
                width={50}
                height={70}
                className="h-[4.5rem] min-w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
              />
            </a>
            <div className="ml-2 inline-block w-full text-[0.6875rem]">
              <h3 className="pb-[0.1875rem] font-bold text-[#1c439b] hover:underline">
                <a
                  href={data.url}
                  target={data.url}
                  title={data.title}
                  className="text-[#1c439b] hover:underline"
                >
                  {data.title}
                </a>
              </h3>
              <p>{data.description}</p>
              <div className="mt-[0.375rem] flex w-full items-center leading-relaxed text-[#808080]">
                <p>
                  {`by `}
                  <a
                    href={data.author_url}
                    target={data.author_url}
                    className="pr-2 text-[#1c439b] hover:underline"
                  >
                    {data.author}
                  </a>
                </p>
                <p className="border-l-[1px] border-[#d8d8d8] pl-2 tracking-tighter">
                  <b>{data.views.toLocaleString()}</b> views
                </p>
                {data.spoiler && (
                  <p className="ml-2 border-l-[1px] border-[#d8d8d8] pl-2 font-bold tracking-tighter text-[#ff2c55]">
                    Spoiler
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default FeaturedArticles;
