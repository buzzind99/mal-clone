import Image from "next/image";
import { IAnimeStacksData } from "@/types/interfaces";

interface Props {
  stacks: IAnimeStacksData[];
  id: number;
  title_url: string;
}

const AnimeStacks: React.FC<Props> = ({ stacks, id, title_url }) => {
  // Using div with onClick event listener on links with generic text
  // (more, view more, etc.) for better SEO
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="interest-stacks" className="mb-5">
      <h2
        id="interest-stacks_header"
        className="mb-[0.45rem] flex w-full justify-between border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
      >
        <span>
          Interest Stacks
          <span className="opacity-40">{` (this is a placeholder, links are external)`}</span>
        </span>
        <span
          onClick={() =>
            openInNewTab(
              `https://myanimelist.net/anime/${id}/${title_url}/stacks`
            )
          }
          className="cursor-pointer text-[0.6875rem] font-normal text-[#1c439b] hover:underline"
        >
          More stacks
        </span>
      </h2>
      <div id="interest-stacks_content">
        {stacks &&
          stacks.map((stack, index) => (
            <div
              key={index}
              id={`interest-stacks_stack_${index + 1}`}
              className={`inline-block h-[7.75rem] w-[16.25rem] ${
                index === stacks.length - 1 ? "" : "mr-[0.625rem]"
              }`}
            >
              <a
                href={stack.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block h-[7.75rem] w-[6.875rem]"
              >
                <Image
                  src={stack.image_2}
                  alt={stack.title}
                  width={85}
                  height={124}
                  className="z-2 absolute left-[1rem] top-0 h-[7.75rem] w-[5.3125rem] object-cover"
                  style={{ boxShadow: "2px 2px 5px 0 rgb(0 0 0 / 40%)" }}
                />
                <Image
                  src={stack.image_1}
                  alt={stack.title}
                  width={85}
                  height={124}
                  className="z-1 absolute left-0 top-0 h-[7.75rem] w-[5.3125rem] object-cover"
                  style={{ boxShadow: "2px 2px 5px 0 rgb(0 0 0 / 40%)" }}
                />
              </a>
              <div className="inline-block w-[9.375rem] align-top text-[0.6875rem]">
                <div className="my-2 font-bold text-[#1c439b]">
                  <a
                    href={stack.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {stack.title}
                  </a>
                </div>
                <div>
                  {`by `}
                  <a
                    href={stack.user_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1c439b] hover:underline"
                  >
                    {stack.user}
                  </a>
                  <div>{`${stack.entries} Entries · ${stack.restacks} Restacks`}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AnimeStacks;
