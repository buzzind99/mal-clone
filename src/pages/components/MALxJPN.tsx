import Image from "next/image";

const MALxJPN: React.FC = () => {
  return (
    <article id="mal-x-jpn" className="font-[Verdana] font-bold text-[0.75rem]">
      <div
        id="mal-x-jpn_header"
        className="h-[1.375rem] py-[0.1875rem] border-b-[1px] border-[#bebebe] flex justify-between items-center"
      >
        <span className="float-left">
          MALxJapan -More than just anime- {"{this is a dummy}"}
        </span>
        <a
          href="https://mxj.myanimelist.net/"
          target="https://mxj.myanimelist.net/"
          className="float-right font-normal text-[0.6875rem] pt-[0.125rem] text-[#1c439b] hover:underline leading-tight"
        >
          Visit MALxJapan
        </a>
      </div>
      <div id="mal-x-japan_content" className="flex mt-1">
        <a
          id="mal-x-japan_content_1"
          title="Learn how to draw anime &amp; manga from Japanese pros🎨"
          href="https://mxj.myanimelist.net/animeartacademy/?utm_source=MAL&utm_medium=top_mxj_animeartacademy"
          target="https://mxj.myanimelist.net/animeartacademy/?utm_source=MAL&utm_medium=top_mxj_animeartacademy"
          className="w-[14.6875rem] cursor-pointer text-[0.6875rem] leading-tight group"
        >
          <Image
            src="/mal-x-jpn_card1.webp"
            alt="mal-x-japan_content_1"
            width={708}
            height={440}
            priority={true}
            className="group-hover:opacity-75"
          />
          <div className="mt-[0.3125rem] text-[#1c439b] group-hover:underline">
            Learn how to draw anime &amp; manga from Japanese pros🎨
          </div>
        </a>
        <a
          id="mal-x-japan_content_2"
          title="How much of an otaku are you? Take the quiz!"
          href="https://mxj.myanimelist.net/otakujudge/takequiz/?utm_source=MAL&utm_medium=top_mxj_otakujudge-app"
          target="https://mxj.myanimelist.net/otakujudge/takequiz/?utm_source=MAL&utm_medium=top_mxj_otakujudge-app"
          className="w-[14.6875rem] mx-[0.4375rem] cursor-pointer text-[0.6875rem] leading-tight group"
        >
          <Image
            src="/mal-x-jpn_card2.webp"
            alt="mal-x-japan_content_2"
            width={708}
            height={440}
            priority={true}
            className="group-hover:opacity-75"
          />
          <div className="mt-[0.3125rem] text-[#1c439b] group-hover:underline">
            How much of an otaku are you? Take the quiz!
          </div>
        </a>
        <a
          id="mal-x-japan_content_3"
          title="Join the official Paradox Live MAL Club & celebrate the
          anime! 🎤"
          href="https://mxj.myanimelist.net/club/paradoxlive/?utm_source=MAL&utm_medium=top_mxj_paralive-club-event"
          target="https://mxj.myanimelist.net/club/paradoxlive/?utm_source=MAL&utm_medium=top_mxj_paralive-club-event"
          className="w-[14.6875rem] cursor-pointer text-[0.6875rem] leading-tight group"
        >
          <Image
            src="/mal-x-jpn_card3.webp"
            alt="mal-x-japan_content_3"
            width={708}
            height={440}
            priority={true}
            className="group-hover:opacity-75"
          />
          <div className="mt-[0.3125rem] text-[#1c439b] group-hover:underline">
            Join the official Paradox Live MAL Club & celebrate the anime! 🎤
          </div>
        </a>
      </div>
    </article>
  );
};

export default MALxJPN;
