import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const TopUpcomingAnimePlaceholder: React.FC = () => {
  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const router = useRouter();
  const redirect = () => {
    router.push("/under_construction");
  };

  return (
    <article
      id="top-upcoming"
      className="w-[18.875rem] justify-between overflow-hidden bg-[#f8f8f8]"
    >
      <div
        id="top-upcoming_header"
        className="mb-[0.3125rem] flex h-[1.75rem] w-full items-center justify-between bg-[#dde1ec] px-[0.5rem] font-[Verdana] font-bold"
      >
        <h2 className="text-[0.875rem] tracking-tighter">
          Top Upcoming Anime {"{dummy}"}
        </h2>
        <div
          onClick={redirect}
          className="cursor-pointer text-[0.75rem] leading-tight tracking-tight text-[#1c439b] hover:underline"
        >
          More
        </div>
      </div>
      <div className="flex px-2 pt-4 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          1
        </span>
        <Link
          href="/under_construction"
          className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer"
        >
          <Image
            src="https://cdn.myanimelist.net/images/anime/1804/126632.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </Link>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Tate no Yuusha no Nariagari Season 3
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 0 eps, scored N/A
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              268,269 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          2
        </span>
        <Link
          href="/under_construction"
          className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer"
        >
          <Image
            src="https://cdn.myanimelist.net/images/anime/1361/130998.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </Link>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Shingeki no Kyojin: The Final Season - Kanketsu-hen
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 0 eps, scored N/A
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              234,644 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          3
        </span>
        <Link
          href="/under_construction"
          className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer"
        >
          <Image
            src="https://cdn.myanimelist.net/images/anime/1499/121027.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </Link>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Kimetsu no Yaiba: Katanakaji no Sato-hen
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 0 eps, scored N/A
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              191,012 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          4
        </span>
        <Link
          href="/under_construction"
          className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer"
        >
          <Image
            src="https://cdn.myanimelist.net/images/anime/1676/128448.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </Link>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Jujutsu Kaisen 2nd Season
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 0 eps, scored N/A
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              183,677 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.5rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          5
        </span>
        <Link
          href="/under_construction"
          className="inline-block h-[4.5rem] w-[3.3875rem] cursor-pointer"
        >
          <Image
            src="https://cdn.myanimelist.net/images/anime/1785/131775.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </Link>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Dr. Stone: New World
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 0 eps, scored N/A
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              169,917 members
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TopUpcomingAnimePlaceholder;
