import Image from "next/image";

const MostPopularAnimePlaceholder: React.FC = () => {
  return (
    <article
      id="most-popular"
      className="w-[18.875rem] justify-between overflow-hidden bg-[#f8f8f8]"
    >
      <div
        id="most-popular_header"
        className="mb-[0.3125rem] flex h-[1.75rem] w-full items-center justify-between bg-[#dde1ec] px-[0.5rem] font-[Verdana] font-bold"
      >
        <h2 className="text-[0.875rem] tracking-tighter">
          Most Popular Anime {"{dummy}"}
        </h2>
        <a className="cursor-pointer text-[0.75rem] leading-tight tracking-tight text-[#1c439b] hover:underline">
          More
        </a>
      </div>
      <div className="flex px-2 pt-4 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          1
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/10/47347.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Shingeki no Kyojin
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 25 eps, scored 8.53
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              3,628,966 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          2
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/9/9453.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Death Note
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 37 eps, scored 8.62
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              3,605,492 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          3
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/1208/94745.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Fullmetal Alchemist: Brotherhood
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 64 eps, scored 9.11
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              3,072,867 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          4
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/12/76049.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              One Punch Man
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 12 eps, scored 8.50
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              2,966,354 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          5
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/11/39717.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Sword Art Online
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 25 eps, scored 7.20
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              2,882,829 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          6
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/10/78745.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Boku no Hero Academia
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 13 eps, scored 7.91
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              2,794,634 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          7
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Kimetsu no Yaiba
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 26 eps, scored 8.52
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              2,673,884 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          8
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/13/17405.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Naruto
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 220 eps, scored 7.98
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              2,637,930 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none text-[#808080]">
          9
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/5/64449.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Tokyo Ghoul
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 12 eps, scored 7.79
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              2,628,671 members
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-2 pb-[1.25rem]">
        <span className="h-[4.375rem] w-[1.65rem] align-top font-[Verdana] font-bold leading-none tracking-tighter text-[#808080]">
          10
        </span>
        <a className="inline-block h-[4.5rem] w-[3.425rem] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/11/39717.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.5rem] w-[3.25rem] border-[1px] border-[#bebebe] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between align-top font-[Verdana] leading-tight tracking-tight text-[#1c439b]">
            <h3 className="inline-block max-w-[11.0625rem] cursor-pointer text-[0.75rem] font-bold hover:underline">
              Hunter x Hunter (2011)
            </h3>
            <span className="h-[0.875rem] w-[1.5rem] cursor-pointer border-b-[1px] border-[#e5e5e5] bg-[#f0f0f0] pl-[0.225rem] pt-[0.05rem] text-[0.625rem] transition-all duration-300 hover:text-white">
              add
            </span>
          </div>
          <div className="mt-[0.4rem] flex-col">
            <div className="text-[0.75rem] text-[#808080]">
              TV, 148 eps, scored 9.04
            </div>
            <div className="text-[0.75rem] leading-none text-[#808080]">
              2,560,041 members
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MostPopularAnimePlaceholder;
