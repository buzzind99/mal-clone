interface Props {
  title: string;
  title_english?: string;
}

const ContentTitleBar: React.FC<Props> = ({ title, title_english }) => {
  return (
    <h1
      id="content-title"
      className="mx-auto block w-[66.375rem] items-center border-b-[1px] border-[#2e51a2] bg-[#e1e7f5] px-[0.625rem] pt-[0.25rem] pb-[0.125rem] font-[Verdana] font-bold"
    >
      {title}
      {title_english && <p className="mb-1 block text-[0.875rem] leading-none text-[grey]">
        {title_english}
      </p>}
    </h1>
  );
};

export default ContentTitleBar;
