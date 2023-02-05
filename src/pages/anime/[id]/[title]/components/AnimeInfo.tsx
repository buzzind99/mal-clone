import { initialAnimeData } from "@/types/initializer";
import { IAnimeData } from "@/types/interfaces";

interface Props {
  animeData: IAnimeData;
}

const AnimeInfo: React.FC<Props> = ({ animeData }) => {
  const data = animeData || initialAnimeData;

  return (
    <div id="information" className="mb-5">
      <h2
        id="information_header"
        className="mb-[0.45rem] border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
      >
        Information
      </h2>
      <div id="information_type" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Type: "}</span>
        <span className="cursor-pointer text-[#1c439b] hover:underline">
          {data.type || "?"}
        </span>
      </div>
      <div id="information_episodes" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Episodes: "}</span>
        {data.episodes || "?"}
      </div>
      <div id="information_status" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Status: "}</span>
        {data.status || "?"}
      </div>
      <div id="information_aired" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Aired: "}</span>
        {data.aired.string || "?"}
      </div>
      <div
        id="information_premiered"
        className="my-[0.375rem] text-[0.6875rem]"
      >
        <span className="font-bold text-[#444]">{"Premiered: "}</span>
        {data.season && data.year ? (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {`${data.season.charAt(0).toUpperCase() + data.season.slice(1)} ${
              data.year
            }`}
          </span>
        ) : (
          "?"
        )}
      </div>
      <div
        id="information_broadcast"
        className="my-[0.375rem] text-[0.6875rem]"
      >
        <span className="font-bold text-[#444]">{"Broadcast: "}</span>
        {data.broadcast.string || "?"}
      </div>
      <div
        id="information_producers"
        className="my-[0.375rem] text-[0.6875rem]"
      >
        <span className="font-bold text-[#444]">{`Producers: `}</span>
        {data.producers && data.producers.length > 1 ? (
          data.producers.slice(0, data.producers.length - 1).map((producer) => (
            <div key={producer.name} className="inline-block">
              <span className="cursor-pointer text-[#1c439b] hover:underline">
                {producer.name}
              </span>
              ,&nbsp;
            </div>
          ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.producers[0].name}
          </span>
        )}
        {data.producers && data.producers.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.producers[data.producers.length - 1].name}
          </span>
        )}
        {!data.producers && "None found"}
      </div>
      <div
        id="information_licensors"
        className="my-[0.375rem] text-[0.6875rem]"
      >
        <span className="font-bold text-[#444]">{`Licensors: `}</span>
        {data.licensors && data.licensors.length > 1 ? (
          data.licensors.slice(0, data.licensors.length - 1).map((producer) => (
            <div key={producer.name} className="inline-block">
              <span className="cursor-pointer text-[#1c439b] hover:underline">
                {producer.name}
              </span>
              ,&nbsp;
            </div>
          ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.licensors[0].name}
          </span>
        )}
        {data.licensors && data.licensors.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.licensors[data.licensors.length - 1].name}
          </span>
        )}
        {!data.licensors && "None found"}
      </div>
      <div id="information_studios" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{`Studios: `}</span>
        {data.studios && data.studios.length > 1 ? (
          data.studios.slice(0, data.studios.length - 1).map((producer) => (
            <div key={producer.name} className="inline-block">
              <span className="cursor-pointer text-[#1c439b] hover:underline">
                {producer.name}
              </span>
              ,&nbsp;
            </div>
          ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.studios[0].name}
          </span>
        )}
        {data.studios && data.studios.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.studios[data.studios.length - 1].name}
          </span>
        )}
        {!data.studios && "None found"}
      </div>
      <div id="information_source" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Source: "}</span>
        {data.source || "?"}
      </div>
      <div id="information_genres" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{`Genres: `}</span>
        {data.genres && data.genres.length > 1 ? (
          data.genres.slice(0, data.genres.length - 1).map((producer) => (
            <div key={producer.name} className="inline-block">
              <span className="cursor-pointer text-[#1c439b] hover:underline">
                {producer.name}
              </span>
              ,&nbsp;
            </div>
          ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.genres[0].name}
          </span>
        )}
        {data.genres && data.genres.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.genres[data.genres.length - 1].name}
          </span>
        )}
        {!data.genres && "None found"}
      </div>
      <div id="information_themes" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{`Themes: `}</span>
        {data.themes && data.themes.length > 1 ? (
          data.themes.slice(0, data.themes.length - 1).map((producer) => (
            <div key={producer.name} className="inline-block">
              <span className="cursor-pointer text-[#1c439b] hover:underline">
                {producer.name}
              </span>
              ,&nbsp;
            </div>
          ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.themes[0].name}
          </span>
        )}
        {data.themes && data.themes.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {data.themes[data.themes.length - 1].name}
          </span>
        )}
        {!data.themes && "None found"}
      </div>
      <div id="information_duration" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Duration: "}</span>
        {data.duration
          ? data.duration
              .replace("hr", "hr.")
              .replace("min", "min.")
              .replace("ep", "ep.")
          : "?"}
      </div>
      <div id="information_rating" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Rating: "}</span>
        {data.rating || "?"}
      </div>
    </div>
  );
};

export default AnimeInfo;
