interface Props {
  synopsis: string | null;
}

const AnimeSynopsis: React.FC<Props> = ({ synopsis }) => {
  return (
    <div id="synopsis" className="mb-5">
      <h2
        id="synopsis_header"
        className="mb-[0.45rem] flex w-full justify-between border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
      >
        Synopsis
        <span className="cursor-pointer text-[0.6875rem] font-normal text-[#1c439b] hover:underline">
          Edit
        </span>
      </h2>
      <div
        id="synopsis_content"
        className="whitespace-pre-line text-[0.6875rem]"
      >
        {synopsis || "No synopsis information has been added to this title."}
      </div>
    </div>
  );
};

export default AnimeSynopsis;
