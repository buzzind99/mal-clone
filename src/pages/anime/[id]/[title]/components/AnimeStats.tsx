import { IAnimeData } from "@/types/interfaces";

interface Props {
  animeData: IAnimeData;
}

const AnimeStats: React.FC<Props> = ({ animeData }) => {
  return (
    <div id="statistics" className="mb-5">
      <h2
        id="statistics_header"
        className="mb-[0.45rem] border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
      >
        Statistics
      </h2>
      <div id="statistics_score" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Score: "}</span>
        {(animeData && animeData.score) || "N/A"}
        <sup className="text-[0.5625rem] text-black">1</sup>
        {` (scored by ${
          animeData && animeData.scored_by
            ? new Intl.NumberFormat("en").format(+animeData.scored_by)
            : "-"
        } users)`}
      </div>
      <div id="statistics_ranked" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Ranked: "}</span>
        {`#${(animeData && animeData.rank) || "N/A"}`}
        <sup className="text-[0.5625rem] text-black">2</sup>
      </div>
      <div
        id="statistics_popularity"
        className="my-[0.375rem] text-[0.6875rem]"
      >
        <span className="font-bold text-[#444]">{"Popularity: "}</span>
        {`#${(animeData && animeData.popularity) || "N/A"}`}
      </div>
      <div id="statistics_members" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Members: "}</span>
        {animeData && animeData.members
          ? new Intl.NumberFormat("en").format(+animeData.members)
          : "N/A"}
      </div>
      <div id="statistics_favorites" className="my-[0.375rem] text-[0.6875rem]">
        <span className="font-bold text-[#444]">{"Members: "}</span>
        {animeData && animeData.favorites
          ? new Intl.NumberFormat("en").format(+animeData.favorites)
          : "N/A"}
      </div>
    </div>
  );
};

export default AnimeStats;
