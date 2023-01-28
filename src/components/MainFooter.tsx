import Image from "next/image";
import Link from "next/link";
import styles from "../styles/MainFooter.module.css";

const MainFooter: React.FC = () => {
  return (
    <footer id="main-footer" className="min-w-[66.375rem] bg-[#2e51a2]">
      <div className="mx-auto w-[38rem] pt-8 pb-6">
        <div className="flex justify-between">
          <div className={`${styles.bfr_follow}`}>
            <a
              title="Follow @myanimelist on Facebook"
              href="https://www.facebook.com/OfficialMyAnimeList"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 cursor-pointer hover:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
                width="24.5px"
                className="inline-block"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
              </svg>
            </a>
            <a
              title="Follow @myanimelist on Twitter"
              href="https://twitter.com/myanimelist"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 cursor-pointer hover:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
                width="24.5px"
                className="inline-block"
              >
                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
              </svg>
            </a>
            <a
              title="Follow @myanimelist on Instagram"
              href="https://www.instagram.com/myanimelistofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 cursor-pointer hover:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
                width="24.5px"
                className="inline-block"
              >
                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
              </svg>
            </a>
            <a
              title="Join Discord Chat"
              href="https://discord.gg/myanimelist"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 cursor-pointer hover:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="white"
                height="28px"
                className="inline-block"
              >
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
              </svg>
            </a>
          </div>
          <div className={`${styles.bfr_app}`}>
            <a
              href="https://apps.apple.com/us/app/myanimelist-official/id1469330778?md=8&ct=pc_footer"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-[0.625rem] cursor-pointer hover:opacity-50"
            >
              <Image
                src="https://cdn.myanimelist.net/images/appli/badge_iOS.png"
                alt="Get MyAnimeList App on App Store"
                width={136}
                height={41}
                className="inline-block h-[30px] w-[100px] object-cover"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?utm_campaign=pc_footer&id=net.myanimelist.app&utm_source=mal"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-50"
            >
              <Image
                src="https://cdn.myanimelist.net/images/appli/badge_googleplay.png"
                alt="Get MyAnimeList App on Google Play"
                width={135}
                height={41}
                className="inline-block h-[30px] w-[100px] object-cover"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${styles.bg_footer} min-w-[66.25rem] pt-8 text-center font-[Verdana] text-[0.75rem] leading-tight tracking-tighter text-white`}
      >
        <Link
          href="/"
          className="mr-[1.125rem] border-r-[1px] border-[#9caed9] pr-5 hover:underline"
        >
          Home
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          About
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          Press Room
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          Support
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          Advertising
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          FAQ
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          Terms
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          Privacy
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          Cookie
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          Notice at Collection
        </Link>
        <Link
          href="/"
          className="mr-[1.125rem] border-r-[1px] border-[#9caed9] pr-5 hover:underline"
        >
          Sitemap
        </Link>
        <Link href="/" className="mr-[1.125rem] hover:underline">
          Login
        </Link>
        <Link href="/" className="hover:underline">
          Sign Up
        </Link>
      </div>
      <div
        className={`${styles.bfr_recommended} flex items-center justify-center py-6 font-[Verdana] text-[0.6875rem] leading-tight tracking-tighter text-[#d8d8d8]`}
      >
        <a
          href="http://otakumode.com/fb/5aO"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center transition-all duration-300 ease-in-out hover:underline hover:opacity-75"
        >
          <Image
            src="https://cdn.myanimelist.net/images/footer/icon_tom30.png?v=1634263200"
            alt="Tokyo Otaku Mode"
            width={30}
            height={30}
            className="mx-3 inline-block h-[20px] w-[20px] object-cover"
          />
          <p className="mr-3">Tokyo Otaku Mode</p>
        </a>
        <a
          href="https://www.honeyfeed.fm/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center transition-all duration-300 ease-in-out hover:underline hover:opacity-75"
        >
          <Image
            src="https://cdn.myanimelist.net/images/footer/icon_honeyfeed.png?v=1634263200"
            alt="Honeyfeed"
            width={52}
            height={60}
            className="mx-3 inline-block h-[20px] w-[17px] object-cover"
          />
          <p className="mr-3">Honeyfeed</p>
        </a>
        <a
          href="https://myanimelist.net/store?_location=mal_f_m"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center transition-all duration-300 ease-in-out hover:underline hover:opacity-75"
        >
          <Image
            src="https://cdn.myanimelist.net/img/sp/common/icon-manga-store.png?v=1634263200"
            alt="Manga Store"
            width={66}
            height={42}
            className="mx-3 inline-block h-[16px] w-[25px] object-cover"
          />
          <p className="mr-3">Manga Store</p>
        </a>
        <a
          href="https://otsukai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center transition-all duration-300 ease-in-out hover:underline hover:opacity-75"
        >
          <Image
            src="https://cdn.myanimelist.net/images/footer/icon_otsukai.png?v=1634263200"
            alt="Otsukai"
            width={60}
            height={60}
            className="mx-3 inline-block h-[20px] w-[20px] object-cover"
          />
          <p className="mr-3">Otsukai</p>
        </a>
      </div>
      <div className={`${styles.bfr_copyright} text-center leading-none`} />
      <div className={`${styles.bfr_tos} pb-7 text-center leading-none`} />
    </footer>
  );
};

export default MainFooter;
