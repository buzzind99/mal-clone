type Props = {
  children?: React.ReactNode;
};

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto mb-[3.375rem] w-[66.25rem] border-x-[1px] border-b-[1px] border-[#e5e5e5]">
      {children}
    </div>
  );
};

export default MainContainer;
