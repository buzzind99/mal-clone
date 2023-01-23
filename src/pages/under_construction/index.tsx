import ContentTitleBar from "@/components/ContentTitleBar";
import FooterChartPlaceholder from "@/components/FooterChartPlaceholder";
import MainContainer from "@/components/MainContainer";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const UnderConstruction: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page is Under Construction - MyAnimeList.net</title>
        <meta name="keywords" content="anime, myanimelist, anime news, manga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="anime, myanimelist, anime news, manga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <NavBar />
      <ContentTitleBar title="Page is Under Construction" />
      <MainContainer>
        <div className="py-14 text-center">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/under-construction.webp"
                alt="Page is Under Construction"
                width={506}
                height={360}
                className="object-cover"
              ></Image>
            </Link>
          </div>
          <div className="pt-2 font-[Helvetica] text-[2.4rem] font-bold text-[#ffca39]">
            This page is under construction
          </div>
        </div>
      </MainContainer>
      <FooterChartPlaceholder />
      <MainFooter />
    </>
  );
};

export default UnderConstruction;
