import { IAnimeData } from "@/types/interfaces";

interface Props {
  animeData: IAnimeData;
}

const Information: React.FC<Props> = ({ animeData }) => {
  return (
    <div id="information" className="mb-5">
      <h2
        id="information_header"
        className="mb-[0.45rem] border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold "
      >
        Information
      </h2>
      <div id="information_type" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Type: "}</span>
        <span className="cursor-pointer text-[#1c439b] hover:underline">
          {animeData.type || "?"}
        </span>
      </div>
      <div id="information_episodes" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Episodes: "}</span>
        {animeData.episodes || "?"}
      </div>
      <div id="information_status" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Status: "}</span>
        {animeData.status || "?"}
      </div>
      <div id="information_aired" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Aired: "}</span>
        {animeData.aired.string || "?"}
      </div>
      <div
        id="information_premiered"
        className="my-[0.375rem] text-[0.6875rem]"
      >
        <span className="font-bold text-[#444]">{"Premiered: "}</span>
        {animeData.season && animeData.year ? (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {`${
              animeData.season.charAt(0).toUpperCase() +
              animeData.season.slice(1)
            } ${animeData.year}`}
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
        {animeData.broadcast.string || "?"}
      </div>
      <div
        id="information_producers"
        className="my-[0.375rem] text-[0.6875rem]"
      >
        <span className="font-bold text-[#444]">{`Producers: `}</span>
        {animeData.producers && animeData.producers.length > 1 ? (
          animeData.producers
            .slice(0, animeData.producers.length - 1)
            .map((producer) => (
              <div key={producer.name} className="inline-block">
                <span className="cursor-pointer text-[#1c439b] hover:underline">
                  {producer.name}
                </span>
                ,&nbsp;
              </div>
            ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.producers[0].name}
          </span>
        )}
        {animeData.producers && animeData.producers.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.producers[animeData.producers.length - 1].name}
          </span>
        )}
        {!animeData.producers && "None found"}
      </div>
      <div
        id="information_licensors"
        className="my-[0.375rem] text-[0.6875rem]"
      >
        <span className="font-bold text-[#444]">{`Licensors: `}</span>
        {animeData.licensors && animeData.licensors.length > 1 ? (
          animeData.licensors
            .slice(0, animeData.licensors.length - 1)
            .map((producer) => (
              <div key={producer.name} className="inline-block">
                <span className="cursor-pointer text-[#1c439b] hover:underline">
                  {producer.name}
                </span>
                ,&nbsp;
              </div>
            ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.licensors[0].name}
          </span>
        )}
        {animeData.licensors && animeData.licensors.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.licensors[animeData.licensors.length - 1].name}
          </span>
        )}
        {!animeData.licensors && "None found"}
      </div>
      <div id="information_studios" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{`Studios: `}</span>
        {animeData.studios && animeData.studios.length > 1 ? (
          animeData.studios
            .slice(0, animeData.studios.length - 1)
            .map((producer) => (
              <div key={producer.name} className="inline-block">
                <span className="cursor-pointer text-[#1c439b] hover:underline">
                  {producer.name}
                </span>
                ,&nbsp;
              </div>
            ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.studios[0].name}
          </span>
        )}
        {animeData.studios && animeData.studios.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.studios[animeData.studios.length - 1].name}
          </span>
        )}
        {!animeData.studios && "None found"}
      </div>
      <div id="information_source" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Source: "}</span>
        {animeData.source || "?"}
      </div>
      <div id="information_genres" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{`Genres: `}</span>
        {animeData.genres && animeData.genres.length > 1 ? (
          animeData.genres
            .slice(0, animeData.genres.length - 1)
            .map((producer) => (
              <div key={producer.name} className="inline-block">
                <span className="cursor-pointer text-[#1c439b] hover:underline">
                  {producer.name}
                </span>
                ,&nbsp;
              </div>
            ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.genres[0].name}
          </span>
        )}
        {animeData.genres && animeData.genres.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.genres[animeData.genres.length - 1].name}
          </span>
        )}
        {!animeData.genres && "None found"}
      </div>
      <div id="information_themes" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{`Themes: `}</span>
        {animeData.themes && animeData.themes.length > 1 ? (
          animeData.themes
            .slice(0, animeData.themes.length - 1)
            .map((producer) => (
              <div key={producer.name} className="inline-block">
                <span className="cursor-pointer text-[#1c439b] hover:underline">
                  {producer.name}
                </span>
                ,&nbsp;
              </div>
            ))
        ) : (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.themes[0].name}
          </span>
        )}
        {animeData.themes && animeData.themes.length > 1 && (
          <span className="cursor-pointer text-[#1c439b] hover:underline">
            {animeData.themes[animeData.themes.length - 1].name}
          </span>
        )}
        {!animeData.themes && "None found"}
      </div>
      <div id="information_duration" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Duration: "}</span>
        {animeData.duration
          ? animeData.duration
              .replace("hr", "hr.")
              .replace("min", "min.")
              .replace("ep", "ep.")
          : "?"}
      </div>
      <div id="information_rating" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Rating: "}</span>
        {animeData.rating || "?"}
      </div>
    </div>
  );
};

export default Information;
