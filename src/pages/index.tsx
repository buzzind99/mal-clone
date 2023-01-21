import ContentTitleBar from "@/components/ContentTitleBar";
import MainContainer from "@/components/MainContainer";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import HomepageContent from "./components/HomepageContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyAnimeList.net - Anime and Manga Database and Community</title>
        <meta
          name="description"
          content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="anime, myanimelist, anime news, manga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <NavBar />
      <ContentTitleBar>Welcome to MyAnimeList.net!</ContentTitleBar>
      <MainContainer>
        <HomepageContent />
      </MainContainer>
    </>
  );
}
