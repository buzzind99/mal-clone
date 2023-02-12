import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IAnimeChartData } from "@/types/interfaces";

interface Props {
  mostPopularAnimeData: IAnimeChartData[];
}

const MostPopularAnime: React.FC<Props> = ({ mostPopularAnimeData }) => {
  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const router = useRouter();
  const redirect = () => {
    router.push("/under_construction");
  };

  return (
    <article
      id="most-popular"
      className="w-[18.875rem] justify-between overflow-hidden bg-[#f8f8f8]"
    >
      <div
        id="most-popular_header"
        className="mb-[1.3125rem] flex h-[1.75rem] w-full items-center justify-between bg-[#dde1ec] px-[0.5rem] font-[Verdana] font-bold"
      >
        <h2 className="text-[0.875rem] tracking-tighter">Most Popular Anime</h2>
        <div
          onClick={redirect}
          className="cursor-pointer text-[0.75rem] leading-tight tracking-tight text-[#1c439b] hover:underline"
        >
          More
        </div>
      </div>
      {mostPopularAnimeData &&
        mostPopularAnimeData.map((anime, index) => (
          <div key={index} className="flex px-2 pb-[1.25rem]">
            <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
              {index + 1}
            </span>
            <Link
              href={anime.url}
              className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer"
            >
              <Image
                src={anime.image_url}
                alt={anime.name}
                width={50}
                height={70}
                className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
              />
            </Link>
            <div className="ml-2 w-[13.25rem]">
              <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
                <h3 className="inline-block max-w-[11.0625rem] text-[0.75rem] font-bold hover:underline">
                  <Link title={anime.name} href={anime.url}>
                    {anime.name}
                  </Link>
                </h3>
                <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
                  add
                </span>
              </div>
              <div className="mt-[0.4rem] flex-col">
                <div className="text-[0.75rem] text-[#808080]">
                  {`${anime.type}, ${anime.episodes} eps, scored ${anime.score}`}
                </div>
                <div className="text-[0.75rem] leading-none text-[#808080]">
                  {`${new Intl.NumberFormat("en").format(
                    anime.members
                  )} members`}
                </div>
              </div>
            </div>
          </div>
        ))}
    </article>
  );
};

export default MostPopularAnime;
