import ContentTitleBar from "@/components/ContentTitleBar";
import FooterChart from "@/components/FooterChart";
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
      <ContentTitleBar title="404 Not Found" />
      <MainContainer>
        <div className="py-14 text-center">
          <div className="flex justify-center">
            <Link
              href="/"
              className="transition-opacity duration-300 ease-[ease-in-out] hover:opacity-80"
            >
              <Image
                src="https://cdn.myanimelist.net/images/error/404_image.png?v=170126"
                alt="404 Not Found"
                width={337}
                height={191}
                priority={true}
                className="h-[11.9375rem] w-[21.0625rem] object-cover"
              />
            </Link>
          </div>
          <div
            className={`mx-auto w-fit font-[Helvetica] text-[2.4rem] font-bold text-[#2e51a2] after:content-["This_page_doesn't_exist."]`}
          />
        </div>
      </MainContainer>
      <div className="h-36" />
      <FooterChart />
      <MainFooter />
    </>
  );
};

export default NotFound;
