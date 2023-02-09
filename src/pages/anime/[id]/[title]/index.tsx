import ContentTitleBar from "@/components/ContentTitleBar";
import FooterChartPlaceholder from "@/components/FooterChartPlaceholder";
import MainContainer from "@/components/MainContainer";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import MALxJPN from "@/pages/components/MALxJPN";
import AnimeInfo from "./components/AnimeInfo";
import AnimeStats from "./components/AnimeStats";
import AnimeStreaming from "./components/AnimeStreaming";
import AnimeTitles from "./components/AnimeTitles";
import AnimePoster from "./components/AnimePoster";
import AnimeSynopsis from "./components/AnimeSynopsis";
import AnimeBackground from "./components/AnimeBackground";
import AnimeRelations from "./components/AnimeRelations";
import AnimeTheme from "./components/AnimeTheme";
import AnimeNews from "./components/AnimeNews";
import AnimeMainStats from "./components/AnimeMainStats";
import AnimeFeatured from "./components/AnimeFeatured";
import AnimeNav from "./components/AnimeNav";
import AnimeStacks from "./components/AnimeStacks";
import AnimeNoData from "./components/AnimeNoData";
import AnimeInfoNoData from "./components/AnimeInfoNoData";
import { GetStaticPaths } from "next";
import {
  IAnimeData,
  IAnimeStacksData,
  IFeaturedData,
  INewsData,
} from "@/types/interfaces";

interface IParams {
  params: {
    id: string;
    title: string;
  };
}

interface Props {
  title: string;
  animeData: IAnimeData;
  featuredData: IFeaturedData[];
  newsData: INewsData[];
  stacksData: IAnimeStacksData[];
}

const Anime: React.FC<Props> = ({
  title,
  animeData,
  newsData,
  featuredData,
  stacksData,
}) => {
  const desc_content = animeData.synopsis
    ? animeData.synopsis.length > 347
      ? animeData.synopsis.slice(0, 347).replaceAll("\n", "") + "..."
      : animeData.synopsis.replaceAll("\n", "")
    : "";

  const title_english =
    animeData.title_english && animeData.title_english !== animeData.title
      ? animeData.title_english
      : "";

  return (
    <>
      <Head>
        <title>{`${animeData.title} (${animeData.title_english}) - MyAnimeList.net`}</title>
        <meta
          name="description"
          content={`Looking for information on the anime Cowboy Bebop? Find out more with MyAnimeList,
          the world&#039;s most active online anime and manga community and database. ${desc_content}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="anime, myanimelist, anime news, manga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <NavBar />
      <ContentTitleBar title={animeData.title} title_english={title_english} />
      <MainContainer>
        <div
          id="main-container_inner-padding"
          className="relative flex bg-white py-[0.5rem] text-left font-[Verdana]"
        >
          <div
            id="content-left"
            className="inline-block w-[15.25rem] border-r-[1px] border-[#e5e5e5] pr-[0.2rem] pl-[0.9rem]"
          >
            <AnimePoster
              title={animeData.title}
              image_url={animeData.images.webp.image_url}
            />
            <AnimeTitles titles={animeData.titles} />
            <AnimeInfo animeData={animeData} />
            <AnimeStats animeData={animeData} />
            <AnimeInfoNoData id_text="available-at" title="Available At" />
            <AnimeInfoNoData id_text="resources" title="Resources" />
            <AnimeStreaming streaming={animeData.streaming} />
          </div>
          <div
            id="content-right"
            className="inline-block w-[51.125rem] pl-[0.3rem] pr-[0.625rem]"
          >
            <AnimeNav
              id={animeData.mal_id}
              title={animeData.title}
              title_url={title}
            />
            <AnimeMainStats animeData={animeData} />
            <AnimeSynopsis synopsis={animeData.synopsis} />
            <AnimeBackground background={animeData.background} />
            <div id="mal-x-jpn_container" className="mb-5">
              <MALxJPN />
            </div>
            <AnimeRelations relations={animeData.relations} />
            <AnimeNoData title="Staff" link_title="More staff" />
            <AnimeTheme theme={animeData.theme} />
            <AnimeNoData title="Reviews" link_title="More reviews" />
            <AnimeStacks
              stacks={stacksData}
              id={animeData.mal_id}
              title={title}
            />
            <AnimeNews
              newsData={newsData}
              id={animeData.mal_id}
              title={title}
            />
            <AnimeNoData
              title="Recent Forum Discussion"
              link_title="More discussions"
            />
            <AnimeFeatured
              featuredData={featuredData}
              id={animeData.mal_id}
              title={title}
            />
          </div>
        </div>
      </MainContainer>
      <FooterChartPlaceholder />
      <MainFooter />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: IParams[] = [];
  const json = await import(`@/data/anime/animePaths.json`).then(
    (res) => res.default
  );

  json.slice(0, 2).forEach((anime) => {
    paths.push({ params: { id: anime.id.toString(), title: anime.title } });
  });

  paths.push({
    params: { id: "44909", title: "San_Zhi_Xiao_Zhu__Mofa_Da_Maoxian" },
  });
  paths.push({
    params: { id: "50265", title: "Spy_x_Family" },
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: IParams) => {
  const { id, title } = context.params;

  const animeData = await import(`@/data/anime/${id}.json`).then(
    (res) => res.default.data
  );
  const newsData = await import(
    "@/pages/components/dummy_data/newsData.json"
  ).then((res) => res.default.data.slice(0, 2));
  const featuredData = await import(
    "@/pages/components/dummy_data/featuredData.json"
  ).then((res) => res.default.data.slice(0, 2));
  const stacksData = await import(
    "./components/dummy_data/stacksData.json"
  ).then((res) => res.default.data);

  return {
    props: { title, animeData, newsData, featuredData, stacksData },
  };
};

export default Anime;
