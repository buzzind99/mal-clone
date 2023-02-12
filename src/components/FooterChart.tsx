import Link from "next/link";
import topRated from "@/data/footerTopAnimeData.json" assert { type: "json" };
import topAiring from "@/data/footerTopAiringAnimeData.json" assert { type: "json" };
import mostPopular from "@/data/footerPopularCharactersData.json" assert { type: "json" };
import { useRouter } from "next/router";
import { IFooterTopAnimeData } from "@/types/interfaces";

const FooterChart: React.FC = () => {
  const topRatedData = topRated.data as IFooterTopAnimeData[];
  const topAiringData = topAiring.data as IFooterTopAnimeData[];
  const mostPopularData = mostPopular.data as IFooterTopAnimeData[];

  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const router = useRouter();
  const redirect = () => {
    router.push("/under_construction");
  };

  return (
    <div id="footer-chart" className="bg-[#f8f8f8]">
      <div className="mx-auto flex w-[66.375rem] justify-center py-[1.25rem] font-[Verdana] tracking-tighter">
        <div
          id="footer-chart_top-anime"
          className="mx-4 inline-block w-[12.5rem] overflow-hidden"
        >
          <div className="mb-2 flex items-center justify-between border-b-[1px] border-[#dedede] pb-2">
            <h3 className="inline-block text-[0.875rem]">Top Anime</h3>
            <div
              className="cursor-pointer text-[0.75rem] text-[#1c439b] hover:underline"
              onClick={redirect}
            >
              More
            </div>
          </div>
          <div id="footer-chart_top-anime_content" className="tracking-tight">
            {topRatedData &&
              topRatedData.map((anime, index) => (
                <div key={index} className="mt-[0.1875rem] flex">
                  <span className=" text-[0.8125rem] text-[#808080]">
                    {index + 1}
                  </span>
                  <Link
                    href={anime.url}
                    className="ml-2 mt-[0.1875rem] inline-block text-[0.625rem] text-[#1c439b] hover:underline"
                  >
                    {anime.name}
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div
          id="footer-chart_top-airing-anime"
          className="mx-4 inline-block w-[12.5rem] overflow-hidden"
        >
          <div className="mb-2 flex items-center justify-between border-b-[1px] border-[#dedede] pb-2">
            <h3 className="inline-block text-[0.875rem]">Top Airing Anime</h3>
            <div
              className="cursor-pointer text-[0.75rem] text-[#1c439b] hover:underline"
              onClick={redirect}
            >
              More
            </div>
          </div>
          <div
            id="footer-chart_top-airing-anime_content"
            className="tracking-tight"
          >
            {topAiringData &&
              topAiringData.map((anime, index) => (
                <div key={index} className="mt-[0.1875rem] flex">
                  <span className=" text-[0.8125rem] text-[#808080]">
                    {index + 1}
                  </span>
                  <Link
                    href={anime.url}
                    className="ml-2 mt-[0.1875rem] inline-block text-[0.625rem] text-[#1c439b] hover:underline"
                  >
                    {anime.name}
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div
          id="footer-chart_most-popular-characters"
          className="mx-4 inline-block w-[12.5rem] overflow-hidden"
        >
          <div className="mb-2 flex items-center justify-between border-b-[1px] border-[#dedede] pb-2">
            <h3 className="inline-block text-[0.875rem]">
              Most Popular Characters
            </h3>
            <div
              className="cursor-pointer text-[0.75rem] text-[#1c439b] hover:underline"
              onClick={redirect}
            >
              More
            </div>
          </div>
          <div className="tracking-tight">
            {mostPopularData &&
              mostPopularData.map((char, index) => (
                <div key={index} className="mt-[0.1875rem] flex">
                  <span className=" text-[0.8125rem] text-[#808080]">
                    {index + 1}
                  </span>
                  <div
                    title="Dummy button"
                    className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline"
                  >
                    {char.name}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterChart;
