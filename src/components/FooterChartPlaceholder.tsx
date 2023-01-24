import { useRouter } from "next/router";

const FooterChartPlaceholder: React.FC = () => {
  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const router = useRouter();
  const redirect = () => {
    router.push("/under_construction");
  };

  return (
    <div id="footer-chart" className="bg-[#f8f8f8]">
      <div className="mx-auto flex w-[66.25rem] justify-center py-[1.25rem] font-[Verdana] tracking-tighter">
        <div
          id="footer-chart_top-anime"
          className="mx-4 inline-block w-[12.5rem] overflow-hidden"
        >
          <div className="flex items-center justify-between border-b-[1px] border-[#dedede] pb-2">
            <h3 className="inline-block text-[0.875rem]">Top Anime</h3>
            <div
              className="cursor-pointer text-[0.75rem] text-[#1c439b] hover:underline"
              onClick={redirect}
            >
              More
            </div>
          </div>
          <div className="tracking-tight">
            <div className="mt-2 flex">
              <span className=" text-[0.8125rem] text-[#808080]">1</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Bleach: Sennen Kessen-hen
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">2</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Fullmetal Alchemist: Brotherhood
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">3</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Steins;Gate
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">4</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Gintama°
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">5</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Kaguya-sama wa Kokurasetai: Ultra Romantic
              </div>
            </div>
          </div>
        </div>
        <div
          id="footer-chart_top-airing-anime"
          className="mx-4 inline-block w-[12.5rem] overflow-hidden"
        >
          <div className="flex items-center justify-between border-b-[1px] border-[#dedede] pb-2">
            <h3 className="inline-block text-[0.875rem]">Top Airing Anime</h3>
            <div
              className="cursor-pointer text-[0.75rem] text-[#1c439b] hover:underline"
              onClick={redirect}
            >
              More
            </div>
          </div>
          <div className="tracking-tight">
            <div className="mt-2 flex">
              <span className=" text-[0.8125rem] text-[#808080]">1</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Vinland Saga Season 2
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">2</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                One Piece
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">3</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Bungou Stray Dogs 4th Season
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">4</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Golden Kamuy 4th Season
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">5</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Holo no Graffiti
              </div>
            </div>
          </div>
        </div>
        <div
          id="footer-chart_most-popular-characters"
          className="mx-4 inline-block w-[12.5rem] overflow-hidden"
        >
          <div className="flex items-center justify-between border-b-[1px] border-[#dedede] pb-2">
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
            <div className="mt-2 flex">
              <span className=" text-[0.8125rem] text-[#808080]">1</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Lamperouge, Lelouch
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">2</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Levi
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">3</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Monkey D., Luffy
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">4</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Lawliet, L
              </div>
            </div>
            <div className="mt-[0.1875rem] flex">
              <span className=" text-[0.8125rem] text-[#808080]">5</span>
              <div className="ml-2 mt-[0.1875rem] inline-block cursor-pointer text-[0.625rem] text-[#1c439b] hover:underline">
                Roronoa, Zoro
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterChartPlaceholder;
