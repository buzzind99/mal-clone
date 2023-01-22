type Props = {
    children?: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({children}) => {
  return <div className="w-[66.25rem] mx-auto border-x-[1px] border-b-[1px] border-[#e5e5e5] mb-[3.375rem]">{children}</div>;
};

export default MainContainer;
