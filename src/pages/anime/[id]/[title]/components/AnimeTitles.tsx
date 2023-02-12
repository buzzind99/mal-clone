interface Props {
  titles: {
    type: string;
    title: string;
  }[];
}

const initialData = [
  { type: "", title: "" },
  { type: "", title: "" },
];
const AnimeTitles: React.FC<Props> = ({ titles }) => {
  const data = titles || initialData;

  return (
    <div id="alternative-titles" className="mb-5">
      <h2
        id="alternative-titles_header"
        className="mb-[0.45rem] border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
      >
        Alternative Titles
      </h2>
      {data.slice(1).map((title, index) => (
        <div
          id={`titles_${title.type.toLowerCase()}`}
          key={index}
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
