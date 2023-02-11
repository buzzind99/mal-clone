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
import AnimeNav from "./components/AnimeNav";
import AnimeInfoNoData from "./components/AnimeInfoNoData";
import AnimeNoData from "./components/AnimeNoData";
import Characters from "./components/Characters";
import { GetStaticPaths } from "next";
import { IAnimeCharactersData, IAnimeData } from "@/types/interfaces";

interface IParams {
  params: {
    id: string;
    title: string;
  };
}

interface Props {
  title_url: string;
  animeData: IAnimeData;
  animeCharactersData: IAnimeCharactersData[] | null;
}

const Anime: React.FC<Props> = ({
  title_url,
  animeData,
  animeCharactersData,
}) => {
  const desc_content = animeData.synopsis
    ? animeData.synopsis.length > 320
      ? animeData.synopsis.slice(0, 320).replaceAll("\n", "") + "..."
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
          content={`Characters, voice actors, producers and directors from the anime ${
            animeData.title
          } ${
            title_english ? `(${title_english}) ` : ""
          }on MyAnimeList, the internet's largest anime database. ${desc_content}`}
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
              title_url={title_url}
              path="characters"
            />
            <Characters characters={animeCharactersData} />
            <div className="mb-32">
              <AnimeNoData title="Staff" />
            </div>
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

  json.forEach((anime) => {
    paths.push({ params: { id: anime.id.toString(), title: anime.title } });
  });

  // json.slice(0, 2).forEach((anime) => {
  //   paths.push({ params: { id: anime.id.toString(), title: anime.title } });
  // });

  // paths.push({
  //   params: { id: "44909", title: "San_Zhi_Xiao_Zhu__Mofa_Da_Maoxian" },
  // });
  // paths.push({
  //   params: { id: "50265", title: "Spy_x_Family" },
  // });
  // paths.push({
  //   params: {
  //     id: "10384",
  //     title: "Sono_Hanabira_ni_Kuchizuke_wo__Reo_x_Mai_Diaries",
  //   },
  // });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: IParams) => {
  const { id, title: title_url } = context.params;

  const animeData = (await import(`@/data/anime/${id}.json`).then(
    (res) => res.default.data
  )) as IAnimeData;
  const animeCharactersData = (await import(
    `@/data/animeCharacters/${id}.json`
  ).then((res) => res.default.data)) as IAnimeCharactersData[];

  return {
    props: {
      title_url,
      animeData,
      animeCharactersData,
    },
  };
};

export default Anime;

// import { GetStaticPaths } from "next";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// interface IParams {
//   params: {
//     id: string;
//     title: string;
//   };
// }

// const Characters = () => {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace(`/under_construction`);
//   }, []);
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths: IParams[] = [];
//   const json = await import(`@/data/anime/animePaths.json`).then(
//     (res) => res.default
//   );

//   json.slice(0, 2).forEach((anime) => {
//     paths.push({ params: { id: anime.id.toString(), title: anime.title } });
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: IParams) => {
//   const { id } = context.params;

//   const animeData = await import(`@/data/anime/${id}.json`).then(
//     (res) => res.default.data
//   );

//   return {
//     props: { animeData },
//   };
// };

// export default Characters;
