interface Props {
  id_text: string;
  title: string;
}

const AnimeInfoNoData: React.FC<Props> = ({ id_text, title }) => {
  return (
    <div id={id_text} className="mb-5">
      <h2
        id={`${id_text}_header`}
        className="mb-[0.45rem] border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold "
      >
        {title}
      </h2>
      <span className="text-[0.6875rem] font-bold text-[#444]">No Data</span>
    </div>
  );
};

export default AnimeInfoNoData;
