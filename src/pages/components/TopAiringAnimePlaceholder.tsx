import Image from "next/image";
import Link from "next/link";

const TopAiringAnimePlaceholder: React.FC = () => {
  return (
    <article
      id="top-airing"
      className="w-[18.875rem] justify-between overflow-hidden bg-[#f8f8f8]"
    >
      <div
        id="top-airing_header"
        className="mb-[0.3125rem] flex h-[1.75rem] w-full items-center justify-between bg-[#dde1ec] px-[0.5rem] font-[Verdana] font-bold"
      >
        <h2 className="text-[0.875rem] tracking-tighter">
          Top Airing Anime {"{dummy}"}
        </h2>
        <Link
          href="/under_construction"
          className="cursor-pointer text-[0.75rem] leading-tight tracking-tight text-[#1c439b] hover:underline"
        >
          More
        </Link>
      </div>
      <div className="flex px-2 pt-4 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          1
        </span>
        <a className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/1170/124312.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Vinland Saga Season 2
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 24 eps, scored 8.83
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              275,563 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          2
        </span>
        <a className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/6/73245.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              One Piece
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 0 eps, scored 8.68
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              2,075,454 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          3
        </span>
        <a className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/1720/126608.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Bungou Stray Dogs 4th Season
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 13 eps, scored 8.58
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              160,740 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          4
        </span>
        <a className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/1855/128059.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Golden Kamuy 4th Season
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 13 eps, scored 8.28
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              67,167 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          5
        </span>
        <a className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/1259/110227.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Holo no Graffiti
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              ONA, 0 eps, scored 8.28
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              50,270 members
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TopAiringAnimePlaceholder;
