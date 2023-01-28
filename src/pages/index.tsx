import ContentTitleBar from "@/components/ContentTitleBar";
import FooterChartPlaceholder from "@/components/FooterChartPlaceholder";
import MainContainer from "@/components/MainContainer";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import AnimeMangaNews from "./components/AnimeMangaNews";
import FeaturedArticles from "./components/FeaturedArticles";
import MALxJPN from "./components/MALxJPN";
import MostPopularAnimePlaceholder from "./components/MostPopularAnimePlaceholder";
import RecentAnimeDiscussions from "./components/RecentAnimeDiscussions";
import TopAiringAnimePlaceholder from "./components/TopAiringAnimePlaceholder";
import TopUpcomingAnimePlaceholder from "./components/TopUpcomingAnimePlaceholder";
import LatestAnimeReviews from "./components/LatestAnimeReviews";
import LatestAnimeRecommendations from "./components/LatestAnimeRecommendations";
import SeasonalAnime from "./components/SeasonalAnime";
import {
  INewsData,
  IDiscussionsData,
  IFeaturedData,
  IReviewsData,
  IRecommendationsData,
  ISeasonalAnimeData,
} from "../types/interfaces";

interface Props {
  children?: React.ReactNode;
  newsData: INewsData[];
  discussionsData: IDiscussionsData[];
  featuredData: IFeaturedData[];
  reviewsData: IReviewsData[];
  recommendationsData: IRecommendationsData[];
  seasonalAnimeData: ISeasonalAnimeData[];
}

export default function Home({
  newsData,
  discussionsData,
  featuredData,
  reviewsData,
  recommendationsData,
  seasonalAnimeData,
}: Props) {
  return (
    <>
      <Head>
        <title>MyAnimeList.net - Anime and Manga Database and Community</title>
        <meta
          name="description"
          content="Welcome to MyAnimeList, the world&#039;s most active
          online anime and manga community and database.
          Join the online community, create your anime and manga list,
          read reviews, explore the forums, follow news, and so much more!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="anime, myanimelist, anime news, manga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <NavBar />
      <ContentTitleBar title="Welcome to MyAnimeList.net!" />
      <MainContainer>
        <div className="relative flex bg-white py-[0.625rem] text-left">
          <div
            id="content-left"
            className="inline-block w-[46.25rem] border-r-[1px] border-[#e5e5e5] pr-[0.625rem] pl-[0.6875rem]"
          >
            <div className="mb-[1.25rem]">
              <MALxJPN />
            </div>
            <div className="mb-[1.25rem]">
              <SeasonalAnime seasonalAnimeData={seasonalAnimeData} />
            </div>
            <div className="mb-[1.25rem]">
              <AnimeMangaNews newsData={newsData} />
            </div>
            <div className="mb-[1.25rem]">
              <RecentAnimeDiscussions discussionsData={discussionsData} />
            </div>
            <div className="mb-[1.25rem]">
              <FeaturedArticles featuredData={featuredData} />
            </div>
            <div className="mb-[1.25rem]">
              <LatestAnimeReviews reviewsData={reviewsData} />
            </div>
            <div className="mb-10">
              <LatestAnimeRecommendations
                recommendationsData={recommendationsData}
              />
            </div>
          </div>
          <div
            id="content-right"
            className="inline-block w-[20rem] px-[0.5rem]"
          >
            <div className="mt-1">
              <TopAiringAnimePlaceholder />
            </div>
            <div className="mt-[1.25rem]">
              <TopUpcomingAnimePlaceholder />
            </div>
            <div className="mt-[1.25rem]">
              <MostPopularAnimePlaceholder />
            </div>
          </div>
        </div>
      </MainContainer>
      <FooterChartPlaceholder />
      <MainFooter />
    </>
  );
}

export async function getStaticProps() {
  const newsData = await import("./components/dummy_data/newsData.json").then(
    (res) => res.default.data
  );
  const discussionsData = await import(
    "./components/dummy_data/discussionsData.json"
  ).then((res) => res.default.data);
  const featuredData = await import(
    "./components/dummy_data/featuredData.json"
  ).then((res) => res.default.data);
  const reviewsData = await import(
    "./components/dummy_data/reviewsData.json"
  ).then((res) => res.default.data);
  const recommendationsData = await import(
    "./components/dummy_data/recommendationsData.json"
  ).then((res) => res.default.data);
  const seasonalAnimeData = await import("@/data/seasonalAnimeData.json").then(
    (res) => res.default.data
  );

  return {
    props: {
      newsData,
      discussionsData,
      featuredData,
      reviewsData,
      recommendationsData,
      seasonalAnimeData,
    },
  };
}
