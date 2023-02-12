import ContentTitleBar from "@/components/ContentTitleBar";
import FooterChart from "@/components/FooterChart";
import MainContainer from "@/components/MainContainer";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import AnimeMangaNews from "./components/AnimeMangaNews";
import FeaturedArticles from "./components/FeaturedArticles";
import MALxJPN from "./components/MALxJPN";
import MostPopularAnime from "./components/MostPopularAnime";
import RecentAnimeDiscussions from "./components/RecentAnimeDiscussions";
import TopAiringAnime from "./components/TopAiringAnime";
import TopUpcomingAnime from "./components/TopUpcomingAnime";
import LatestAnimeReviews from "./components/LatestAnimeReviews";
import LatestAnimeRecommendations from "./components/LatestAnimeRecommendations";
import SeasonalAnime from "./components/SeasonalAnime";
import LatestEpisodes from "./components/LatestEpisodes";
import MostPopularTrailers from "./components/MostPopularTrailers";
import {
  INewsData,
  IDiscussionsData,
  IFeaturedData,
  IReviewsData,
  IRecommendationsData,
  ISeasonalAnimeData,
  ILatestEpisodesData,
  IPopularTrailersData,
  IAnimeChartData,
} from "../types/interfaces";

interface Props {
  children?: React.ReactNode;
  newsData: INewsData[];
  discussionsData: IDiscussionsData[];
  featuredData: IFeaturedData[];
  reviewsData: IReviewsData[];
  recommendationsData: IRecommendationsData[];
  seasonalAnimeData: ISeasonalAnimeData[];
  latestEpisodesData: ILatestEpisodesData[];
  popularTrailersData: IPopularTrailersData[];
  topAiringAnimeData: IAnimeChartData[];
  topUpcomingAnimeData: IAnimeChartData[];
  mostPopularAnimeData: IAnimeChartData[];
}

export default function Home({
  newsData,
  discussionsData,
  featuredData,
  reviewsData,
  recommendationsData,
  seasonalAnimeData,
  latestEpisodesData,
  popularTrailersData,
  topAiringAnimeData,
  topUpcomingAnimeData,
  mostPopularAnimeData,
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
            <div id="mal-x-jpn_container" className="mb-[1.25rem]">
              <MALxJPN />
            </div>
            <div id="seasonal-anime_container" className="mb-[1.25rem]">
              <SeasonalAnime seasonalAnimeData={seasonalAnimeData} />
            </div>
            <div id="latest-episodes_container" className="mb-[1.25rem]">
              <LatestEpisodes latestEpisodesData={latestEpisodesData} />
            </div>
            <div id="most-popular-trailers_container" className="mb-[1.25rem]">
              <MostPopularTrailers popularTrailersData={popularTrailersData} />
            </div>
            <div id="anime-manga-news_container" className="mb-[1.25rem]">
              <AnimeMangaNews newsData={newsData} />
            </div>
            <div
              id="recent-anime-discussions_container"
              className="mb-[1.25rem]"
            >
              <RecentAnimeDiscussions discussionsData={discussionsData} />
            </div>
            <div id="featured-articles_container" className="mb-[1.25rem]">
              <FeaturedArticles featuredData={featuredData} />
            </div>
            <div id="latest-anime-reviews_container" className="mb-[1.25rem]">
              <LatestAnimeReviews reviewsData={reviewsData} />
            </div>
            <div id="latest-anime-recommendations_container" className="mb-10">
              <LatestAnimeRecommendations
                recommendationsData={recommendationsData}
              />
            </div>
          </div>
          <div
            id="content-right"
            className="inline-block w-[20rem] px-[0.5rem]"
          >
            <div id="top-airing-anime_container" className="mt-1">
              <TopAiringAnime topAiringAnimeData={topAiringAnimeData} />
            </div>
            <div id="top-upcoming-anime_container" className="mt-[1.25rem]">
              <TopUpcomingAnime topUpcomingAnimeData={topUpcomingAnimeData} />
            </div>
            <div id="most-popular-anime_container" className="mt-[1.25rem]">
              <MostPopularAnime mostPopularAnimeData={mostPopularAnimeData} />
            </div>
          </div>
        </div>
      </MainContainer>
      <FooterChart />
      <MainFooter />
    </>
  );
}

export async function getStaticProps() {
  const newsData = (await import("./components/dummy_data/newsData.json").then(
    (res) => res.default.data
  )) as INewsData[];
  const discussionsData = (await import(
    "./components/dummy_data/discussionsData.json"
  ).then((res) => res.default.data)) as IDiscussionsData[];
  const featuredData = (await import(
    "./components/dummy_data/featuredData.json"
  ).then((res) => res.default.data)) as IFeaturedData[];
  const reviewsData = (await import(
    "./components/dummy_data/reviewsData.json"
  ).then((res) => res.default.data)) as IReviewsData[];
  const recommendationsData = (await import(
    "./components/dummy_data/recommendationsData.json"
  ).then((res) => res.default.data)) as IRecommendationsData[];
  const seasonalAnimeData = (await import("@/data/seasonalAnimeData.json").then(
    (res) => res.default.data
  )) as ISeasonalAnimeData[];
  const latestEpisodesData = (await import(
    "@/data/latestEpisodesData.json"
  ).then((res) => res.default.data)) as ILatestEpisodesData[];
  const popularTrailersData = (await import(
    "@/data/popularTrailersData.json"
  ).then((res) => res.default.data)) as IPopularTrailersData[];
  const topAiringAnimeData = (await import(
    "@/data/topAiringAnimeData.json"
  ).then((res) => res.default.data)) as IAnimeChartData[];
  const topUpcomingAnimeData = (await import(
    "@/data/topUpcomingAnimeData.json"
  ).then((res) => res.default.data)) as IAnimeChartData[];
  const mostPopularAnimeData = (await import(
    "@/data/mostPopularAnimeData.json"
  ).then((res) => res.default.data)) as IAnimeChartData[];

  return {
    props: {
      newsData,
      discussionsData,
      featuredData,
      reviewsData,
      recommendationsData,
      seasonalAnimeData,
      latestEpisodesData,
      popularTrailersData,
      topAiringAnimeData,
      topUpcomingAnimeData,
      mostPopularAnimeData,
    },
  };
}
