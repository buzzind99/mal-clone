import { IoSearch } from "react-icons/io5";

const NavBar: React.FC = () => {
  return (
    <nav
      id="nav-bar"
      className="w-[66.25rem] mx-auto bg-[#2e51a2] h-[2.125rem] text-[0.9rem] flex items-center justify-between"
    >
      <div
        id="nav-left"
        className="cursor-default font-bold leading-loose text-white"
      >
        <div className="relative h-[2.125rem] px-[0.75rem] pt-[0.15rem] inline-block hover:bg-[#e1e7f5] hover:text-black group">
          Anime
          <div className="hidden group-hover:block absolute bg-[#e1e7f5] text-black z-10 top-[2.125rem] left-0 font-normal text-[0.8rem] whitespace-nowrap">
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Anime Search
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Top Anime
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Seasonal Anime
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Videos
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Reviews
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Recommendations
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              2023 Challange
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Fantasy Anime League
            </div>
          </div>
        </div>
        <div className="relative h-[2.125rem] px-[0.75rem] pt-[0.15rem] inline-block hover:bg-[#e1e7f5] hover:text-black group">
          Manga
          <div className="hidden group-hover:block absolute bg-[#e1e7f5] text-black z-10 top-[2.125rem] left-0 font-normal text-[0.8rem] whitespace-nowrap">
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Manga Search
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Top Manga
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Manga Store
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Reviews
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Recommendations
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              2023 Challange
            </div>
          </div>
        </div>
        <div className="relative h-[2.125rem] px-[0.75rem] pt-[0.15rem] inline-block hover:bg-[#e1e7f5] hover:text-black group">
          Community
          <div className="hidden group-hover:block absolute bg-[#e1e7f5] text-black z-10 top-[2.125rem] left-0 font-normal text-[0.8rem] whitespace-nowrap">
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Interest Stacks
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Forums
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Clubs
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Blogs
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Users
            </div>
          </div>
        </div>
        <div className="relative h-[2.125rem] px-[0.75rem] pt-[0.15rem] inline-block hover:bg-[#e1e7f5] hover:text-black group">
          Industry
          <div className="hidden group-hover:block absolute bg-[#e1e7f5] text-black z-10 top-[2.125rem] left-0 font-normal text-[0.8rem] whitespace-nowrap">
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              News
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Featured Articles
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              People
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Characters
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Companies
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              MAL×Japan
            </div>
          </div>
        </div>
        <div className="relative h-[2.125rem] px-[0.75rem] pt-[0.15rem] inline-block hover:bg-[#e1e7f5] hover:text-black group">
          Watch
          <div className="hidden group-hover:block absolute bg-[#e1e7f5] text-black z-10 top-[2.125rem] left-0 font-normal text-[0.8rem] whitespace-nowrap">
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Episode Videos
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Anime Trailers
            </div>
          </div>
        </div>
        <div className="relative h-[2.125rem] px-[0.75rem] pt-[0.15rem] inline-block hover:bg-[#e1e7f5] hover:text-black group">
          Read
          <div className="hidden group-hover:block absolute bg-[#e1e7f5] text-black z-10 top-[2.125rem] left-0 font-normal text-[0.8rem] whitespace-nowrap">
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Manga Store
            </div>
          </div>
        </div>
        <div className="relative h-[2.125rem] px-[0.75rem] pt-[0.15rem] inline-block hover:bg-[#e1e7f5] hover:text-black group">
          Help
          <div className="hidden group-hover:block absolute bg-[#e1e7f5] text-black z-10 top-[2.125rem] left-0 font-normal text-[0.8rem] whitespace-nowrap">
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              About
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Support
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Advertising
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              FAQ
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Report
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              Staff
            </div>
            <div className="cursor-pointer hover:bg-[#2e51a2] px-[0.75rem] hover:text-white py-[0.2rem]">
              MAL Supporter
            </div>
          </div>
        </div>
      </div>
      <div id="nav-right" className="inline-block">
        <form className="text-xs flex items-center">
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
            className="h-[1.375rem] w-[18rem] border-[#2e51a2] border-l-[2px] text-[0.75rem] p-2"
            placeholder="Search Anime, Manga, and more..."
          ></input>
          <button
            disabled
            className="h-[1.375rem] w-[1.625rem] bg-[#e1e7f5] rounded-r-[0.3rem] mr-[0.375rem] justify-center"
          >
            <IoSearch
              size={15}
              className="text-[#c3c3c3] inline-block mb-[0.15rem] ml-[0.1rem]"
            />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
