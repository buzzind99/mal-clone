import { IoSearch } from "react-icons/io5";

const NavBar: React.FC = () => {
  return (
    <nav
      id="nav-bar"
      className="mx-auto flex h-[2.125rem] w-[66.375rem] items-center justify-between bg-[#2e51a2] text-[0.9rem]"
    >
      <div
        id="nav-left"
        className="cursor-default font-bold leading-loose text-white"
      >
        <div className="group relative inline-block h-[2.125rem] px-[0.75rem] pt-[0.15rem] hover:bg-[#e1e7f5] hover:text-black">
          Anime
          <div className="absolute top-[2.125rem] left-0 z-10 hidden whitespace-nowrap bg-[#e1e7f5] text-[0.8rem] font-normal text-black group-hover:block">
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Anime Search
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Top Anime
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Seasonal Anime
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Videos
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Reviews
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Recommendations
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              2023 Challange
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Fantasy Anime League
            </div>
          </div>
        </div>
        <div className="group relative inline-block h-[2.125rem] px-[0.75rem] pt-[0.15rem] hover:bg-[#e1e7f5] hover:text-black">
          Manga
          <div className="absolute top-[2.125rem] left-0 z-10 hidden whitespace-nowrap bg-[#e1e7f5] text-[0.8rem] font-normal text-black group-hover:block">
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Manga Search
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Top Manga
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Manga Store
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Reviews
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Recommendations
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              2023 Challange
            </div>
          </div>
        </div>
        <div className="group relative inline-block h-[2.125rem] px-[0.75rem] pt-[0.15rem] hover:bg-[#e1e7f5] hover:text-black">
          Community
          <div className="absolute top-[2.125rem] left-0 z-10 hidden whitespace-nowrap bg-[#e1e7f5] text-[0.8rem] font-normal text-black group-hover:block">
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Interest Stacks
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Forums
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Clubs
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Blogs
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Users
            </div>
          </div>
        </div>
        <div className="group relative inline-block h-[2.125rem] px-[0.75rem] pt-[0.15rem] hover:bg-[#e1e7f5] hover:text-black">
          Industry
          <div className="absolute top-[2.125rem] left-0 z-10 hidden whitespace-nowrap bg-[#e1e7f5] text-[0.8rem] font-normal text-black group-hover:block">
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              News
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Featured Articles
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              People
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Characters
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Companies
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              MAL×Japan
            </div>
          </div>
        </div>
        <div className="group relative inline-block h-[2.125rem] px-[0.75rem] pt-[0.15rem] hover:bg-[#e1e7f5] hover:text-black">
          Watch
          <div className="absolute top-[2.125rem] left-0 z-10 hidden whitespace-nowrap bg-[#e1e7f5] text-[0.8rem] font-normal text-black group-hover:block">
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Episode Videos
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Anime Trailers
            </div>
          </div>
        </div>
        <div className="group relative inline-block h-[2.125rem] px-[0.75rem] pt-[0.15rem] hover:bg-[#e1e7f5] hover:text-black">
          Read
          <div className="absolute top-[2.125rem] left-0 z-10 hidden whitespace-nowrap bg-[#e1e7f5] text-[0.8rem] font-normal text-black group-hover:block">
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Manga Store
            </div>
          </div>
        </div>
        <div className="group relative inline-block h-[2.125rem] px-[0.75rem] pt-[0.15rem] hover:bg-[#e1e7f5] hover:text-black">
          Help
          <div className="absolute top-[2.125rem] left-0 z-10 hidden whitespace-nowrap bg-[#e1e7f5] text-[0.8rem] font-normal text-black group-hover:block">
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              About
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Support
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Advertising
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              FAQ
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Report
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              Staff
            </div>
            <div className="cursor-pointer px-[0.75rem] py-[0.2rem] hover:bg-[#2e51a2] hover:text-white">
              MAL Supporter
            </div>
          </div>
        </div>
      </div>
      <div id="nav-right" className="inline-block">
        <form className="flex items-center text-xs">
          <select className="h-[1.375rem] w-[6.75rem] rounded-l-[0.3rem] pl-1 focus:outline-0">
            <option>All</option>
            <option>Manga</option>
            <option>Characters</option>
            <option>People</option>
            <option>Companies</option>
            <option>Manga Store</option>
            <option>News</option>
            <option>Featured Articles</option>
            <option>Forum</option>
            <option>Clubs</option>
            <option>Users</option>
          </select>
          <input
            className="h-[1.375rem] w-[18rem] border-l-[2px] border-[#2e51a2] p-2 text-[0.75rem]"
            placeholder="Search Anime, Manga, and more..."
          ></input>
          <button
            disabled
            aria-label="search button"
            className="mr-[0.375rem] h-[1.375rem] w-[1.625rem] justify-center rounded-r-[0.3rem] bg-[#e1e7f5]"
          >
            <IoSearch
              size={15}
              className="mb-[0.15rem] ml-[0.1rem] inline-block text-[#c3c3c3]"
            />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
