type Props = {
  children?: React.ReactNode;
};

const ContentTitleBar: React.FC<Props> = ({ children }) => {
  return (
    <h1
      id="content-title"
      className="w-[66.25rem] mx-auto bg-[#e1e7f5] border-b-[1px] border-[#2e51a2] font-[Verdana] font-bold flex items-center pt-[0.25rem] pb-[0.125rem] px-[0.625rem]"
    >
      {children}
    </h1>
  );
};

export default ContentTitleBar;
