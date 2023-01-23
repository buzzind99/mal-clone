import AnimeMangaNews from "./AnimeMangaNews";
import FeaturedArticles from "./FeaturedArticles";
import MALxJPN from "./MALxJPN";
import MostPopularAnimePlaceholder from "./MostPopularAnimePlaceholder";
import RecentAnimeDiscussions from "./RecentAnimeDiscussions";
import TopAiringAnimePlaceholder from "./TopAiringAnimePlaceholder";
import TopUpcomingAnimePlaceholder from "./TopUpcomingAnimePlaceholder";

const HomepageContent: React.FC = () => {
  return (
    <div className="relative flex bg-white py-[0.625rem] text-left">
      <div
        id="content-left"
        className="inline-block w-[46.5395rem] border-r-[1px] border-[#e5e5e5]"
      >
        <div className="mx-[0.625rem] mb-[1.25rem]">
          <MALxJPN />
        </div>
        <div className="mx-[0.625rem] mb-[1.25rem]">
          <AnimeMangaNews />
        </div>
        <div className="mx-[0.625rem] mb-[1.25rem]">
          <RecentAnimeDiscussions />
        </div>
        <div className="mx-[0.625rem] mb-[1.25rem]">
          <FeaturedArticles />
        </div>
      </div>
      <div id="content-right" className="inline-block w-[20rem]">
        <div className="mx-[0.5rem] mt-1">
          <TopAiringAnimePlaceholder />
        </div>
        <div className="mx-[0.5rem] mt-[1.25rem]">
          <TopUpcomingAnimePlaceholder />
        </div>
        <div className="mx-[0.5rem] mt-[1.25rem]">
          <MostPopularAnimePlaceholder />
        </div>
      </div>
    </div>
  );
};

export default HomepageContent;
