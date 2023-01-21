import MALxJPN from "./MALxJPN";

const HomepageContent: React.FC = () => {
  return (
    <div className="bg-white relative text-left h-screen flex py-[0.625rem]">
      <div
        id="content-left"
        className="inline-block w-[46.5395rem] border-r-[1px] border-[#e5e5e5]"
      >
        <MALxJPN />
      </div>
      <div id="content-right" className="inline-block w-[20rem]"></div>
    </div>
  );
};

export default HomepageContent;
