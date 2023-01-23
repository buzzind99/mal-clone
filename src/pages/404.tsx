import ContentTitleBar from "@/components/ContentTitleBar";
import FooterChartPlaceholder from "@/components/FooterChartPlaceholder";
import MainContainer from "@/components/MainContainer";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - MyAnimeList.net</title>
        <meta name="keywords" content="anime, myanimelist, anime news, manga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="anime, myanimelist, anime news, manga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <NavBar />
      <ContentTitleBar>404 Not Found</ContentTitleBar>
      <MainContainer>
        <div className="py-14 text-center">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="https://cdn.myanimelist.net/images/error/404_image.png?v=170126"
                alt="404 Not Found"
                width={337}
                height={191}
                priority={true}
                className="object-cover"
              ></Image>
            </Link>
          </div>
          <div className="font-[Helvetica] text-[2.4rem] font-bold text-[#2e51a2]">
            This page doesn&apos;t exist.
          </div>
        </div>
      </MainContainer>
      <div className="h-36" />
      <FooterChartPlaceholder />
      <MainFooter />
    </>
  );
};

export default NotFound;
