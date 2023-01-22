import Image from "next/image";
import Link from "next/link";

const MainHeader: React.FC = () => {
  return (
    <header
      id="main-header"
      className="flex bg-white h-12 min-w-[66.25rem] justify-center"
    >
      <div id="inner-header" className="w-[66.25rem] py-2 flex justify-between">
        <Link href="/">
          <Image
            src="/mal-logo-xsmall.webp"
            alt="MyAnimeList.net"
            width={179}
            height={32}
            priority={true}
          />
        </Link>
        <div
          id="header-buttons"
          className="flex items-center text-[0.925rem] text-center font-bold align-middle"
        >
          <button
            title="dummy button"
            className="rounded-sm bg-[#eb6100] w-[7.125rem] h-[1.625rem] border-[#eb6100]  cursor-pointer inline-block text-white mx-1 border-2"
          >
            Hide Ads
          </button>
          <button
            title="dummy button"
            className="rounded-sm bg-white w-[5.875rem] h-[1.625rem] border-[#2e51a2] cursor-pointer inline-block text-[#2e51a2] mx-1 border-2"
          >
            Login
          </button>
          <button
            title="dummy button"
            className="rounded-sm bg-[#2e51a2] w-[5.875rem] h-[1.625rem] border-[#2e51a2] cursor-pointer inline-block text-white ml-1 border-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
