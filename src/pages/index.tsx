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
import {
  INewsData,
  IDiscussionsData,
  IFeaturedData,
} from "../types/interfaces";

interface Props {
  children?: React.ReactNode;
  newsData: INewsData[];
  discussionsData: IDiscussionsData[];
  featuredData: IFeaturedData[];
}

export default function Home({
  newsData,
  discussionsData,
  featuredData,
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
            className="inline-block w-[46.5395rem] border-r-[1px] border-[#e5e5e5]"
          >
            <div className="mx-[0.625rem] mb-[1.25rem]">
              <MALxJPN />
            </div>
            <div className="mx-[0.625rem] mb-[1.25rem]">
              <AnimeMangaNews newsData={newsData} />
            </div>
            <div className="mx-[0.625rem] mb-[1.25rem]">
              <RecentAnimeDiscussions discussionsData={discussionsData} />
            </div>
            <div className="mx-[0.625rem] mb-[1.25rem]">
              <FeaturedArticles featuredData={featuredData} />
            </div>
            <div className="mx-[0.625rem] mb-[1.25rem]">
              <LatestAnimeReviews />
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

  return {
    props: { newsData, discussionsData, featuredData },
  };
}
