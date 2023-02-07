import ContentTitleBar from "@/components/ContentTitleBar";
import FooterChartPlaceholder from "@/components/FooterChartPlaceholder";
import MainContainer from "@/components/MainContainer";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import AnimeInfo from "./components/AnimeInfo";
import AnimeStats from "./components/AnimeStats";
import AnimeStreaming from "./components/AnimeStreaming";
import AnimeTitles from "./components/AnimeTitles";
import AnimePoster from "./components/AnimePoster";
import AnimeSynopsis from "./components/AnimeSynopsis";
import AnimeBackground from "./components/AnimeBackground";
import AnimeRelations from "./components/AnimeRelations";
import AnimeTheme from "./components/AnimeTheme";
import { GetStaticPaths } from "next";
import { IAnimeData } from "@/types/interfaces";

interface IParams {
  params: {
    id: string;
    title: string;
  };
}

interface Props {
  animeData: IAnimeData;
}

const Anime: React.FC<Props> = ({ animeData }) => {
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
            <div id="available-at" className="mb-5">
              <h2
                id="available-at_header"
                className="mb-[0.45rem] border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold "
              >
                Available At
              </h2>
              <span className="text-[0.6875rem] font-bold text-[#444]">
                No Data
              </span>
            </div>
            <div id="resources" className="mb-5">
              <h2
                id="resources_header"
                className="mb-[0.45rem] border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold "
              >
                Resources
              </h2>
              <span className="text-[0.6875rem] font-bold text-[#444]">
                No Data
              </span>
            </div>
            <AnimeStreaming streaming={animeData.streaming} />
          </div>
          <div
            id="content-right"
            className="inline-block w-[51.125rem] pl-[0.3rem] pr-[0.625rem]"
          >
            <AnimeSynopsis synopsis={animeData.synopsis} />
            <AnimeBackground background={animeData.background} />
            <AnimeRelations relations={animeData.relations} />
            <AnimeTheme theme={animeData.theme} />
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

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: IParams) => {
  const { id } = context.params;

  const animeData = await import(`@/data/anime/${id}.json`).then(
    (res) => res.default.data
  );

  return {
    props: { animeData },
  };
};

export default Anime;
