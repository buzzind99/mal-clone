interface Props {
  titles: {
    type: string;
    title: string;
  }[];
}

const AnimeTitles: React.FC<Props> = ({ titles }) => {
  return (
    <div id="alternative-titles" className="mb-5">
      <h2
        id="alternative-titles_header"
        className="mb-[0.45rem] border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold "
      >
        Alternative Titles
      </h2>
      {titles.slice(1).map((title) => (
        <div
          id={`titles_${title.type.toLowerCase()}`}
          key={title.type}
          className="my-[0.375rem] text-[0.6875rem]"
        >
          <span className="font-bold text-[#444]">{`${
            title.type === "Synonym" ? "Synonyms" : title.type
          }: `}</span>
          {title.title}
        </div>
      ))}
    </div>
  );
};

export default AnimeTitles;
