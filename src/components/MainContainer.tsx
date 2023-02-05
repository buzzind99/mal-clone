interface Props {
  children?: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div id="main-container" className="mx-auto mb-[3.375rem] w-[66.375rem] border-x-[1px] border-b-[1px] border-[#e5e5e5]">
      {children}
    </div>
  );
};

export default MainContainer;
