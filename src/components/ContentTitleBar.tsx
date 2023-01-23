type Props = {
  children?: React.ReactNode;
};

const ContentTitleBar: React.FC<Props> = ({ children }) => {
  return (
    <h1
      id="content-title"
      className="mx-auto flex w-[66.25rem] items-center border-b-[1px] border-[#2e51a2] bg-[#e1e7f5] px-[0.625rem] pt-[0.25rem] pb-[0.125rem] font-[Verdana] font-bold"
    >
      {children}
    </h1>
  );
};

export default ContentTitleBar;
