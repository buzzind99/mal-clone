import ContentTitleBar from "@/components/ContentTitleBar";
import FooterChart from "@/components/FooterChart";
import MainContainer from "@/components/MainContainer";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import UnderConstruction from "@/components/UnderConstruction";
import Head from "next/head";

const UnderConstructionPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>This Page is Under Construction - MyAnimeList.net</title>
        <meta name="keywords" content="anime, myanimelist, anime news, manga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="anime, myanimelist, anime news, manga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <NavBar />
      <ContentTitleBar title="This page is under construction" />
      <MainContainer>
        <UnderConstruction />
      </MainContainer>
      <FooterChart />
      <MainFooter />
    </>
  );
};

export default UnderConstructionPage;
