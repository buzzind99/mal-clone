interface Props {
  streaming: { name: string; url: string }[];
}

const AnimeStreaming: React.FC<Props> = ({ streaming }) => {
  return (
    <div id="streaming-platforms" className="mb-5">
      <h2
        id="streaming-platforms_header"
        className="mb-[0.45rem] border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold "
      >
        Streaming
      </h2>
      <span className="text-[0.6875rem] font-bold text-[#444]">No Data</span>
    </div>
  );
};

export default AnimeStreaming;
