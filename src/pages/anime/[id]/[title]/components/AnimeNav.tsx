import Link from "next/link";

interface Props {
  id: number;
  title: string;
  title_url: string;
  path?: string;
}

const navs = new Map([
  ["characters", "Characters & Staff"],
  ["videos", "Videos"],
  ["stats", "Stats"],
  ["reviews", "Reviews"],
  ["userrecs", "Recommendations"],
  ["stacks", "Interest Stacks"],
  ["news", "News"],
  ["forums", "Forums"],
  ["clubs", "Clubs"],
  ["pics", "Pictures"],
]);

const AnimeNav: React.FC<Props> = ({ id, title, title_url, path }) => {
  const activeStyle = "text-white bg-[#1c439b]";

  return (
    <nav className="mb-3 text-[0.75rem] tracking-tighter text-[#1c439b]">
      <div
        id="anime-nav_top"
        className="mb-[0.625rem] mt-[0.125rem] w-full border-b-[1px] border-[#1c439b] pb-[0.17rem]"
      >
        <span
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            !path ? activeStyle : ""
          }`}
        >
          <Link href={`/anime/${id}/${title_url}`}>Details</Link>
        </span>
        <span
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "characters" ? activeStyle : ""
          }`}
        >
          <Link
            href={`/anime/${id}/${title_url}/characters`}
          >{`Characters & Staff`}</Link>
        </span>
        <span
          title="Dummy button"
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "video" ? activeStyle : ""
          }`}
        >
          Videos
        </span>
        <span
          title="Dummy button"
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "stats" ? activeStyle : ""
          }`}
        >
          Stats
        </span>
        <span
          title="Dummy button"
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "reviews" ? activeStyle : ""
          }`}
        >
          Reviews
        </span>
        <span
          title="Dummy button"
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "userrecs" ? activeStyle : ""
          }`}
        >
          Recommendations
        </span>
        <span
          title="Dummy button"
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "stacks" ? activeStyle : ""
          }`}
        >
          Interest Stacks
        </span>
        <span
          title="Dummy button"
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "news" ? activeStyle : ""
          }`}
        >
          News
        </span>
        <span
          title="Dummy button"
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "forum" ? activeStyle : ""
          }`}
        >
          Forum
        </span>
        <span
          title="Dummy button"
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "clubs" ? activeStyle : ""
          }`}
        >
          Clubs
        </span>
        <span
          title="Dummy button"
          className={`mr-[0.17rem] cursor-pointer px-[0.21rem] py-[0.095rem] hover:bg-[#1c439b] hover:text-white ${
            path === "pics" ? activeStyle : ""
          }`}
        >
          Pictures
        </span>
      </div>
      <div id="anime-nav_path">
        <span>
          <Link href="/" className="mr-2 hover:underline">
            Top
          </Link>
          <span className="mr-2 leading-none text-black">{`>`}</span>
        </span>
        <span>
          <Link href="/anime" className="mr-2 hover:underline">
            Anime
          </Link>
          <span className="mr-2 leading-none text-black">{`>`}</span>
        </span>
        <span>
          <Link
            href={`/anime/${id}/${title_url}`}
            className="mr-2 hover:underline"
          >
            {title && title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </Link>
          {path && <span className="mr-2 leading-none text-black">{`>`}</span>}
        </span>
        {path && (
          <span>
            <Link
              href={
                path === "characters"
                  ? `/anime/${id}/${title_url}/characters`
                  : `/anime/${id}/${title_url}`
              }
              className="mr-2 hover:underline"
            >
              {navs.get(path)}
            </Link>
          </span>
        )}
      </div>
    </nav>
  );
};

export default AnimeNav;
