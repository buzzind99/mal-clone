import Link from "next/link";

interface Props {
  relations: {
    relation: string;
    entry: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
  }[];
}

const initialData = [
  { relation: "", entry: [{ mal_id: 0, type: "", name: "", url: "" }] },
];

const AnimeRelations: React.FC<Props> = ({ relations }) => {
  const data = relations || initialData;

  return (
    <div id="relations" className="mb-5">
      <h2
        id="relations_header"
        className="mb-[0.35rem] flex w-full justify-between border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
      >
        Related Anime
        <span className="cursor-pointer text-[0.6875rem] font-normal text-[#1c439b] hover:underline">
          Edit
        </span>
      </h2>
      <table id="relations_content" className="w-full">
        <tbody className="table whitespace-pre-line text-[0.6875rem]">
          {data
            ? data.map((relation) => (
                <tr key={relation.relation} className="table-row">
                  <td className="whitespace-nowrap border-b-[1px] border-[#e5e5e5] p-[0.1875rem] text-right">{`${relation.relation}:`}</td>
                  <td className="w-full border-b-[1px] border-[#e5e5e5] pl-[0.1875rem]">
                    {relation.entry.length > 1 ? (
                      relation.entry
                        .slice(0, relation.entry.length - 1)
                        .map((item) =>
                          item.type === "anime" ? (
                            <Link
                              key={item.name}
                              href={`/anime/${item.mal_id}`}
                              className="inline-block py-[0.1875rem] pr-[0.03rem]"
                            >
                              <span className="cursor-pointer text-[#1c439b] hover:underline">
                                {item.name}
                              </span>
                              ,&nbsp;
                            </Link>
                          ) : (
                            <div
                              key={item.name}
                              className="inline-block py-[0.1875rem] pr-[0.03rem]"
                            >
                              <span
                                title="Dummy button"
                                className="cursor-pointer text-[#1c439b] hover:underline"
                              >
                                {item.name}
                              </span>
                              ,&nbsp;
                            </div>
                          )
                        )
                    ) : relation.entry[0].type === "anime" ? (
                      <Link
                        href={`/anime/${relation.entry[0].mal_id}`}
                        className="cursor-pointer py-[0.1875rem] text-[#1c439b] hover:underline"
                      >
                        {relation.entry[0].name}
                      </Link>
                    ) : (
                      <span
                        title="Dummy button"
                        className="cursor-pointer py-[0.1875rem] text-[#1c439b] hover:underline"
                      >
                        {relation.entry[0].name}
                      </span>
                    )}
                    {relation.entry.length > 1 &&
                      (relation.entry[relation.entry.length - 1].type ===
                      "anime" ? (
                        <Link
                          href={`/anime/${
                            relation.entry[relation.entry.length - 1].mal_id
                          }`}
                          className="cursor-pointer py-[0.1875rem] pr-[0.03rem] text-[#1c439b] hover:underline"
                        >
                          {relation.entry[relation.entry.length - 1].name}
                        </Link>
                      ) : (
                        <span
                          title="Dummy button"
                          className="cursor-pointer py-[0.1875rem] pr-[0.03rem] text-[#1c439b] hover:underline"
                        >
                          {relation.entry[relation.entry.length - 1].name}
                        </span>
                      ))}
                  </td>
                </tr>
              ))
            : "No related anime information has been added to this title."}
        </tbody>
      </table>
    </div>
  );
};

export default AnimeRelations;
