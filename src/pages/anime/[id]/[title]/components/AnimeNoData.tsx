interface Props {
  title: string;
  link_title?: string;
}

const AnimeNoData: React.FC<Props> = ({ title, link_title }) => {
  return (
    <div className="mb-5">
      <h2 className="mb-[0.45rem] flex w-full justify-between border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold">
        {title && title}
        <span
          title="Dummy button"
          className="cursor-pointer text-[0.6875rem] font-normal text-[#1c439b] hover:underline"
        >
          {link_title && link_title}
        </span>
      </h2>
      <span className="text-[0.6875rem] font-bold text-[#444]">No Data</span>
    </div>
  );
};

export default AnimeNoData;
