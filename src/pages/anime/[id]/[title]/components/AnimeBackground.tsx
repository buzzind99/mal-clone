interface Props {
  background: string | null;
}

const AnimeBackground: React.FC<Props> = ({ background }) => {
  return (
    <div id="background" className="mb-5">
      <h2
        id="background_header"
        className="mb-[0.45rem] flex w-full justify-between border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
      >
        Background
        <span
          title="Dummy button"
          className="cursor-pointer text-[0.6875rem] font-normal text-[#1c439b] hover:underline"
        >
          Edit
        </span>
      </h2>
      <div
        id="background_content"
        className="whitespace-pre-line text-[0.6875rem]"
      >
        {background ||
          "No background information has been added to this title."}
      </div>
    </div>
  );
};

export default AnimeBackground;
