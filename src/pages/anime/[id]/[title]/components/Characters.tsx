import { IAnimeCharactersData } from "@/types/interfaces";
import Image from "next/image";

interface Props {
  characters: IAnimeCharactersData[] | null;
}

const Characters: React.FC<Props> = ({ characters }) => {
  return (
    <div id="characters" className="mb-5">
      <h2
        id="characters_header"
        className="mb-[0.35rem] flex w-full justify-between border-b-[1px] border-[#bebebe] py-[0.15rem] text-[0.75rem] font-bold"
      >
        {`Characters & Voice Actors`}
        <span
          title="Dummy button"
          className="cursor-pointer text-[0.6875rem] font-normal text-[#1c439b] hover:underline"
        >
          Add character
        </span>
      </h2>
      {characters && !!characters.length && (
        <div
          id="characters_filter"
          className="mb-1 flex justify-end border-b-[1px] border-[#d8d8d8] pt-1 pb-2 text-[0.6875rem] text-[#787878]"
        >
          <span
            title="Dummy button"
            className="mr-3 cursor-pointer pr-3"
            style={{
              background: "url(/icon-chevron.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right -15px",
              backgroundSize: "0.5rem 1.625rem",
            }}
          >
            Sorted by Main Role
          </span>
          <span
            title="Dummy button"
            className="cursor-pointer pr-3"
            style={{
              background: "url(/icon-chevron.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right -15px",
              backgroundSize: "0.5rem 1.625rem",
            }}
          >
            Language
          </span>
        </div>
      )}
      <div
        id="characters_content"
        className="w-full text-[0.6875rem] [&>*:nth-child(even)]:bg-[#f8f8f8]"
      >
        {characters &&
          !!characters.length &&
          characters.map((character) => (
            <div
              key={character.character.name}
              id="characters_each"
              className="flex justify-between border-b-[1px] border-[#e5e5e5]"
            >
              <div id="characters_each-left" className="align-top">
                <div className="inline-block p-[0.1875rem] align-top">
                  <Image
                    title="Dummy button"
                    src={
                      character.character.images.webp.image_url ||
                      `/image_questionmark.webp`
                    }
                    alt={character.character.name}
                    width={42}
                    height={62}
                    className="mr-[0.1875rem] inline-block h-16 w-[2.75rem] cursor-pointer border-[1px] border-[#bebebe] object-cover"
                  />
                  <div className="inline-block align-top">
                    <div
                      title="Dummy button"
                      className="w-fit cursor-pointer p-[0.1875rem] text-[#1c439b] hover:underline"
                    >
                      {character.character.name}
                    </div>
                    <div className="p-[0.1875rem]">{character.role}</div>
                    <div className="p-[0.1875rem] text-[#787878]">
                      {`${new Intl.NumberFormat("en").format(
                        +character.favorites
                      )} Favorites`}
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="characters_each-right"
                className="p-[0.1875rem] align-top"
              >
                {!!character.voice_actors.length &&
                  character.voice_actors.map((va) => (
                    <div key={va.person.name} className="text-right">
                      <div className="inline-block align-top">
                        <div className="p-[0.1875rem] text-[#1c439b]">
                          <span
                            title="Dummy button"
                            className="w-fit cursor-pointer hover:underline"
                          >
                            {va.person.name}
                          </span>
                        </div>
                        <div className="p-[0.1875rem] text-[#787878]">
                          {va.language}
                        </div>
                      </div>
                      <Image
                        title="Dummy button"
                        src={
                          va.person.images.jpg.image_url ||
                          `/image_questionmark.webp`
                        }
                        alt={character.character.name}
                        width={42}
                        height={62}
                        className="mr-[0.1875rem] inline-block h-16 w-[2.75rem] cursor-pointer border-[1px] border-[#bebebe] object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        {characters && !characters.length && (
          <div>
            No characters or voice actors have been added to this title.
          </div>
        )}
      </div>
    </div>
  );
};

export default Characters;
