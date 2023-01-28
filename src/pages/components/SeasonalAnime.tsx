import Image from "next/image";
import styles from "@/styles/SeasonalAnime.module.css";
import { useEffect, useState } from "react";

const SeasonalAnime: React.FC = () => {
  const dummyData = [
    {
      id: 49387,
      anime: "Vinland Saga Season 2",
      anime_url: "https://myanimelist.net/anime/49387/Vinland_Saga_Season_2",
      image_url: "https://cdn.myanimelist.net/images/anime/1170/124312.jpg",
    },
    {
      id: 48417,
      anime:
        "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II",
      anime_url:
        "https://myanimelist.net/anime/48417/Maou_Gakuin_no_Futekigousha__Shijou_Saikyou_no_Maou_no_Shiso_Tensei_shite_Shison-tachi_no_Gakkou_e_Kayou_II",
      image_url: "https://cdn.myanimelist.net/images/anime/1471/128323.jpg",
    },
    {
      id: 50608,
      anime: "Tokyo Revengers: Seiya Kessen-hen",
      anime_url:
        "https://myanimelist.net/anime/50608/Tokyo_Revengers__Seiya_Kessen-hen",
      image_url: "https://cdn.myanimelist.net/images/anime/1773/132313.jpg",
    },
    {
      id: 50197,
      anime: "Ijiranaide, Nagatoro-san 2nd Attack",
      anime_url:
        "https://myanimelist.net/anime/50197/Ijiranaide_Nagatoro-san_2nd_Attack",
      image_url: "https://cdn.myanimelist.net/images/anime/1902/129579.jpg",
    },
    {
      id: 51105,
      anime: "NieR:Automata Ver1.1a",
      anime_url: "https://myanimelist.net/anime/51105/NieRAutomata_Ver1_1a",
      image_url: "https://cdn.myanimelist.net/images/anime/1399/128318.jpg",
    },
    {
      id: 50330,
      anime: "Bungou Stray Dogs 4th Season",
      anime_url:
        "https://myanimelist.net/anime/50330/Bungou_Stray_Dogs_4th_Season",
      image_url: "https://cdn.myanimelist.net/images/anime/1720/126608.jpg",
    },
    {
      id: 52305,
      anime: "Tomo-chan wa Onnanoko!",
      anime_url: "https://myanimelist.net/anime/52305/Tomo-chan_wa_Onnanoko",
      image_url: "https://cdn.myanimelist.net/images/anime/1444/131828.jpg",
    },
    {
      id: 41514,
      anime:
        "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. 2",
      anime_url:
        "https://myanimelist.net/anime/41514/Itai_no_wa_Iya_nano_de_Bougyoryoku_ni_Kyokufuri_Shitai_to_Omoimasu_2",
      image_url: "https://cdn.myanimelist.net/images/anime/1782/128859.jpg",
    },
    {
      id: 50739,
      anime:
        "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken",
      anime_url:
        "https://myanimelist.net/anime/50739/Otonari_no_Tenshi-sama_ni_Itsunomanika_Dame_Ningen_ni_Sareteita_Ken",
      image_url: "https://cdn.myanimelist.net/images/anime/1209/132816.jpg",
    },
    {
      id: 44204,
      anime: "Kyokou Suiri Season 2",
      anime_url: "https://myanimelist.net/anime/44204/Kyokou_Suiri_Season_2",
      image_url: "https://cdn.myanimelist.net/images/anime/1901/131653.jpg",
    },
    {
      id: 53111,
      anime:
        "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen",
      anime_url:
        "https://myanimelist.net/anime/53111/Dungeon_ni_Deai_wo_Motomeru_no_wa_Machigatteiru_Darou_ka_IV__Fuka_Shou_-_Yakusai-hen",
      image_url: "https://cdn.myanimelist.net/images/anime/1226/131884.jpg",
    },
    {
      id: 52173,
      anime: "Koori Zokusei Danshi to Cool na Douryou Joshi",
      anime_url:
        "https://myanimelist.net/anime/52173/Koori_Zokusei_Danshi_to_Cool_na_Douryou_Joshi",
      image_url: "https://cdn.myanimelist.net/images/anime/1927/132758.jpg",
    },
    {
      id: 51252,
      anime: "Spy Kyoushitsu",
      anime_url: "https://myanimelist.net/anime/51252/Spy_Kyoushitsu",
      image_url: "https://cdn.myanimelist.net/images/anime/1491/132864.jpg",
    },
    {
      id: 51815,
      anime: "Kubo-san wa Mob wo Yurusanai",
      anime_url:
        "https://myanimelist.net/anime/51815/Kubo-san_wa_Mob_wo_Yurusanai",
      image_url: "https://cdn.myanimelist.net/images/anime/1818/132330.jpg",
    },
    {
      id: 53411,
      anime: "Buddy Daddies",
      anime_url: "https://myanimelist.net/anime/53411/Buddy_Daddies",
      image_url: "https://cdn.myanimelist.net/images/anime/1183/132462.jpg",
    },
    {
      id: 49612,
      anime: "Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu",
      anime_url:
        "https://myanimelist.net/anime/49612/Ningen_Fushin_no_Boukensha-tachi_ga_Sekai_wo_Sukuu_you_desu",
      image_url: "https://cdn.myanimelist.net/images/anime/1446/131578.jpg",
    },
    {
      id: 52736,
      anime: "Tensei Oujo to Tensai Reijou no Mahou Kakumei",
      anime_url:
        "https://myanimelist.net/anime/52736/Tensei_Oujo_to_Tensai_Reijou_no_Mahou_Kakumei",
      image_url: "https://cdn.myanimelist.net/images/anime/1053/129004.jpg",
    },
    {
      id: 52093,
      anime: "Trigun Stampede",
      anime_url: "https://myanimelist.net/anime/52093/Trigun_Stampede",
      image_url: "https://cdn.myanimelist.net/images/anime/1426/129194.jpg",
    },
    {
      id: 50932,
      anime: "Saikyou Onmyouji no Isekai Tenseiki",
      anime_url:
        "https://myanimelist.net/anime/50932/Saikyou_Onmyouji_no_Isekai_Tenseiki",
      image_url: "https://cdn.myanimelist.net/images/anime/1547/125900.jpg",
    },
    {
      id: 51462,
      anime: "Isekai Nonbiri Nouka",
      anime_url: "https://myanimelist.net/anime/51462/Isekai_Nonbiri_Nouka",
      image_url: "https://cdn.myanimelist.net/images/anime/1983/132329.jpg",
    },
  ];

  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  interface SlideStyle {
    marginLeft: string;
    transition?: string;
  }

  const slideState = [
    [...dummyData.slice(16, 20), ...dummyData.slice(0, 9)],
    [...dummyData.slice(0, 13)],
    [...dummyData.slice(4, 17)],
    [...dummyData.slice(8, 20), ...dummyData.slice(0, 1)],
    [...dummyData.slice(12, 20), ...dummyData.slice(0, 5)],
  ];

  const [slideStyle, setSlideStyle] = useState<SlideStyle>({
    marginLeft: "-41.5rem",
  });
  const [direction, setDirection] = useState("");
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [animeList, setAnimeList] = useState(slideState[0]);

  const slideHandler = (direction: string) => {
    setIsDisabled(true);
    if (direction === "right") {
      setDirection("right");
      setSlideStyle({
        marginLeft: "-83rem",
        transition: "margin 500ms ease-in-out",
      });

      if (counter === 4) {
        setCounter(0);
      } else {
        setCounter((counter) => counter + 1);
      }
    } else if (direction === "left") {
      setDirection("left");
      setSlideStyle({
        marginLeft: "0rem",
        transition: "margin 500ms ease-in-out",
      });

      if (counter === 0) {
        setCounter(4);
      } else {
        setCounter((counter) => counter - 1);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimeList(slideState[counter]);
      setSlideStyle({ marginLeft: "-41.5rem" });
      setIsDisabled(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <article id="seasonal-anime" className="font-[Verdana] text-[0.75rem]">
      <div
        id="seasonal-anime_header"
        className="flex h-[1.375rem] items-center justify-between border-b-[1px] border-[#bebebe] pb-[0.1875rem] pt-1"
      >
        <h2 className="font-bold">{"Winter 2023 Anime"}</h2>
        <div
          onClick={() => openInNewTab("https://myanimelist.net/anime/season")}
          className="float-right cursor-pointer pt-[0.125rem] text-[0.6875rem] font-normal leading-tight text-[#1c439b] hover:underline"
        >
          View More
        </div>
      </div>
      <div
        id="seasonal-anime_content"
        className="group relative mt-1 overflow-hidden whitespace-nowrap"
      >
        <button
          title="Previous"
          className={`${styles.bg_button_left} ease[ease-in-out] transition-all duration-300 group-hover:translate-x-[2.5625rem] group-hover:opacity-100`}
          onClick={slideHandler.bind(null, "left")}
          disabled={isDisabled}
        />
        <button
          title="Next"
          className={`${styles.bg_button_right} transition-all duration-300 ease-[ease-in-out] group-hover:translate-x-[-2.5rem] group-hover:opacity-100`}
          onClick={slideHandler.bind(null, "right")}
          disabled={isDisabled}
        />
        <div id="seasonal-anime_slider-container" style={slideStyle}>
          {animeList.map((data) => (
            <a
              key={data.id}
              href={data.anime_url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "relative mr-[0.375rem] inline-block h-[13.75rem] w-[10rem] transition-all duration-300 ease-[ease-in-out] hover:opacity-70"
              }
            >
              <h3 className="flex justify-center text-[0.65625rem] leading-tight tracking-tighter text-white">
                <span
                  className={`${styles.bg_anime} absolute bottom-0 w-[9.875rem] overflow-hidden whitespace-normal px-[0.3rem] pb-[0.225rem] pt-4`}
                >
                  {data.anime}
                </span>
              </h3>
              <Image
                src={data.image_url}
                alt={data.anime}
                width={162}
                height={222}
                priority={true}
                className="h-[13.75rem] w-[10rem] border-[1px] border-[#e5e5e5] object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SeasonalAnime;
