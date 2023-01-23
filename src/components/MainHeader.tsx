import Image from "next/image";
import Link from "next/link";

const MainHeader: React.FC = () => {
  return (
    <header
      id="main-header"
      className="mx-auto flex h-12 w-[66.25rem] justify-center bg-white"
    >
      <div id="inner-header" className="flex w-[66.25rem] justify-between py-2">
        <Link href="/">
          <Image
            src="/mal-logo-xsmall.webp"
            alt="MyAnimeList.net"
            width={179}
            height={32}
            priority={true}
            className="h-[2rem] w-[11.1875rem] object-cover"
          />
        </Link>
        <div
          id="header-buttons"
          className="flex items-center text-center align-middle text-[0.925rem] font-bold"
        >
          <button
            title="dummy button"
            className="mx-1 inline-block h-[1.625rem] w-[7.125rem] cursor-pointer  rounded-sm border-2 border-[#eb6100] bg-[#eb6100] text-white"
          >
            Hide Ads
          </button>
          <button
            title="dummy button"
            className="mx-1 inline-block h-[1.625rem] w-[5.875rem] cursor-pointer rounded-sm border-2 border-[#2e51a2] bg-white text-[#2e51a2]"
          >
            Login
          </button>
          <button
            title="dummy button"
            className="ml-1 inline-block h-[1.625rem] w-[5.875rem] cursor-pointer rounded-sm border-2 border-[#2e51a2] bg-[#2e51a2] text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
