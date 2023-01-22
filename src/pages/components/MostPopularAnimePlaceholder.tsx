import Image from "next/image";

const MostPopularAnimePlaceholder: React.FC = () => {
  return (
    <article
      id="most-popular"
      className="w-[18.875rem] bg-[#f8f8f8] justify-between overflow-hidden"
    >
      <div
        id="most-popular_header"
        className="mb-[0.3125rem] h-[1.75rem] flex items-center justify-between bg-[#dde1ec] px-[0.5rem] w-full font-bold font-[Verdana]"
      >
        <h2 className="text-[0.875rem] tracking-tighter">
          Most Popular Anime {"{dummy}"}
        </h2>
        <a className="cursor-pointer text-[0.75rem] text-[#1c439b] hover:underline leading-tight tracking-tight">
          More
        </a>
      </div>
      <div className="pt-4 pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none">
          1
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/10/47347.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              Shingeki no Kyojin
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 25 eps, scored 8.53
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              3,628,966 members
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none">
          2
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/9/9453.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              Death Note
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 37 eps, scored 8.62
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              3,605,492 members
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none">
          3
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/1208/94745.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              Fullmetal Alchemist: Brotherhood
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 64 eps, scored 9.11
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              3,072,867 members
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none">
          4
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/12/76049.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              One Punch Man
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 12 eps, scored 8.50
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              2,966,354 members
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none">
          5
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/11/39717.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              Sword Art Online
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 25 eps, scored 7.20
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              2,882,829 members
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none">
          6
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/10/78745.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              Boku no Hero Academia
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 13 eps, scored 7.91
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              2,794,634 members
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none">
          7
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              Kimetsu no Yaiba
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 26 eps, scored 8.52
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              2,673,884 members
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none">
          8
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/13/17405.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              Naruto
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 220 eps, scored 7.98
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              2,637,930 members
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none">
          9
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/5/64449.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              Tokyo Ghoul
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 12 eps, scored 7.79
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              2,628,671 members
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[1.25rem] flex px-2">
        <span className="text-[#808080] font-bold font-[Verdana] h-[4.375rem] w-[1.65rem] align-top leading-none tracking-tighter">
          10
        </span>
        <a className="h-[4.5rem] w-[3.425rem] inline-block border-[1px] border-[#bebebe] cursor-pointer">
          <Image
            src="https://cdn.myanimelist.net/images/anime/11/39717.jpg"
            alt="placeholder"
            width={50}
            height={70}
            className="h-[4.375rem] object-cover"
          />
        </a>
        <div className="ml-2 w-[13.25rem]">
          <div className="flex justify-between font-[Verdana] leading-tight tracking-tight text-[#1c439b] align-top">
            <h3 className="inline-block cursor-pointer hover:underline text-[0.75rem] font-bold max-w-[11.0625rem]">
              Hunter x Hunter (2011)
            </h3>
            <span className="text-[0.625rem] bg-[#f0f0f0] w-[1.5rem] h-[0.875rem] pl-[0.225rem] pt-[0.05rem] hover:text-white cursor-pointer transition-all duration-300 border-b-[1px] border-[#e5e5e5]">
              add
            </span>
          </div>
          <div className="flex-col mt-[0.4rem]">
            <div className="text-[#808080] text-[0.75rem]">
              TV, 148 eps, scored 9.04
            </div>
            <div className="text-[#808080] text-[0.75rem] leading-none">
              2,560,041 members
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MostPopularAnimePlaceholder;
