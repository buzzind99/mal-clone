interface Props {
  theme: { openings: string[]; endings: string[] };
}

const AnimeTheme: React.FC<Props> = ({ theme }) => {
  return (
    <div id="theme" className="mb-5">
      <div id="opening-theme" className="mr-4 inline-block w-[24.5rem]">
        <h2
          id="opening-theme_header"
          className="mb-[0.45rem] flex w-full justify-between border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
        >
          Opening Theme
          <span className="cursor-pointer text-[0.6875rem] font-normal text-[#1c439b] hover:underline">
            Edit
          </span>
        </h2>
        {theme && !theme.openings.length && (
          <div className="text-[0.6875rem]">
            No opening themes have been added to this title.
          </div>
        )}
        {theme && !!theme.openings.length && (
          <table id="ending-theme_content" className="text-[0.6875rem]">
            <tbody>
              {theme.openings.map((opening, index) => (
                <tr key={index}>
                  <td className="w-[8%]">
                    <div
                      className="mr-1 h-[1.625rem] w-[1.625rem] opacity-[0.09] hover:opacity-[0.06]"
                      style={{ background: "url(/play-circle.svg)" }}
                    ></div>
                  </td>
                  <td>{opening}</td>
                  <td className="w-[1.8125rem]">
                    <div
                      className="h-[1.125rem] w-[1.8125rem] opacity-[0.09]"
                      style={{ background: "url(/mv-icon.png)" }}
                    ></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div id="ending-theme" className="inline-block w-[24.5rem]">
        <h2
          id="ending-theme_header"
          className="mb-[0.45rem] flex w-full justify-between border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
        >
          Ending Theme
          <span className="cursor-pointer text-[0.6875rem] font-normal text-[#1c439b] hover:underline">
            Edit
          </span>
        </h2>
        {theme && !theme.endings.length && (
          <div className="text-[0.6875rem]">
            No ending themes have been added to this title.
          </div>
        )}
        {theme && !!theme.endings.length && (
          <table id="ending-theme_content" className="text-[0.6875rem]">
            <tbody>
              {theme.endings.map((ending, index) => (
                <tr key={index}>
                  <td className="w-[8%]">
                    <div
                      className="mr-1 h-[1.625rem] w-[1.625rem] opacity-[0.09] hover:opacity-[0.06]"
                      style={{ background: "url(/play-circle.svg)" }}
                    ></div>
                  </td>
                  <td>{ending}</td>
                  <td className="w-[1.8125rem]">
                    <div
                      className="h-[1.125rem] w-[1.8125rem] opacity-[0.09]"
                      style={{ background: "url(/mv-icon.png)" }}
                    ></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AnimeTheme;
