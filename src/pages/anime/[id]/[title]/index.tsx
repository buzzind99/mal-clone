import ContentTitleBar from "@/components/ContentTitleBar";
import FooterChartPlaceholder from "@/components/FooterChartPlaceholder";
import MainContainer from "@/components/MainContainer";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import ImagePoster from "./components/ImagePoster";
import { GetStaticPaths } from "next";
import { IAnimeData } from "@/types/interfaces";
import AlternativeTitles from "./components/AlternativeTitles";
import Information from "./components/Information";

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
  console.log(animeData);

  return (
    <>
      <Head>
        <title>{`${animeData.title} (${animeData.title_english}) - MyAnimeList.net`}</title>
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
      <ContentTitleBar
        title={animeData.title}
        title_english={
          animeData.title_english && animeData.title_english !== animeData.title
            ? animeData.title_english
            : ""
        }
      />
      <MainContainer>
        <div id="main-container_inner-padding" className="relative flex bg-white py-[0.5rem] text-left font-[Verdana]">
          <div
            id="content-left"
            className="inline-block w-[15.25rem] border-r-[1px] border-[#e5e5e5] pr-[0.2rem] pl-[0.9rem]"
          >
            <ImagePoster
              title={animeData.title}
              image_url={animeData.images.webp.image_url}
            />
            <AlternativeTitles titles={animeData.titles} />
            <Information animeData={animeData} />
          </div>
          <div
            id="content-right"
            className="inline-block w-[20rem] px-[0.5rem]"
          ></div>
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
