import Image from "next/image";
import { IAnimeCharactersData } from "@/types/interfaces";

interface Props {
  displayCharacters: IAnimeCharactersData[] | null;
}

const AnimeCharacters: React.FC<Props> = ({ displayCharacters }) => {
  const length = displayCharacters
    ? Math.ceil(displayCharacters.length / 2)
    : 0;

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
          Edit
        </span>
      </h2>
      <div id="characters_content" className="flex text-[0.6875rem]">
        {displayCharacters && displayCharacters.length > 1 && (
          <div
            id="characters_content-left"
            className="mr-2 inline-block w-[25.0625rem] border-r-[1px] border-[#e5e5e5] pr-2 [&>*:nth-child(even)]:bg-[#f8f8f8]"
          >
            {displayCharacters.slice(0, length).map((character) => (
              <table key={character.character.name} className="w-full">
                <tbody className="mr-2">
                  <tr className="border-b-[1px] border-[#e5e5e5]">
                    <td className="w-[3.125rem] p-[0.1875rem] align-top">
                      <Image
                        title="Dummy button"
                        src={
                          character.character.images.webp.image_url ||
                          `/image_questionmark.webp`
                        }
                        alt={character.character.name}
                        width={42}
                        height={62}
                        className="h-16 w-[2.75rem] cursor-pointer border-[1px] border-[#bebebe] object-cover"
                      />
                    </td>
                    <td className="p-[0.1875rem] align-top">
                      <h3
                        title="Dummy button"
                        className="w-fit cursor-pointer text-[#1c439b] hover:underline"
                      >
                        {character.character.name}
                      </h3>
                      <div className="mt-[0.125rem] text-[0.575rem]">
                        {character.role}
                      </div>
                    </td>
                    {!!character.voice_actors.length && (
                      <td className="p-[0.1875rem] text-right align-top">
                        <div className="text-[#1c439b]">
                          <span
                            title="Dummy button"
                            className="w-fit cursor-pointer hover:underline"
                          >
                            {character.voice_actors[0].person.name}
                          </span>
                        </div>
                        <div className="mt-[0.125rem] text-[0.575rem]">
                          {character.voice_actors[0].language}
                        </div>
                      </td>
                    )}
                    {!!character.voice_actors.length && (
                      <td className="w-[3.125rem] p-[0.1875rem] align-top">
                        <Image
                          title="Dummy button"
                          src={
                            character.voice_actors[0].person.images.jpg
                              .image_url || `/image_questionmark.webp`
                          }
                          alt={character.character.name}
                          width={42}
                          height={62}
                          className="h-16 w-[2.75rem] cursor-pointer border-[1px] border-[#bebebe] object-cover"
                        />
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        )}
        {displayCharacters && displayCharacters.length > 1 && (
          <div
            id="characters_content-right"
            className="inline-block w-[24.5rem] [&>*:nth-child(even)]:bg-[#f8f8f8]"
          >
            {displayCharacters.slice(length).map((character) => (
              <table key={character.character.name} className="w-full">
                <tbody className="mr-2">
                  <tr className="border-b-[1px] border-[#e5e5e5]">
                    <td className="w-[3.125rem] p-[0.1875rem] align-top">
                      <Image
                        title="Dummy button"
                        src={
                          character.character.images.webp.image_url ||
                          `/image_questionmark.webp`
                        }
                        alt={character.character.name}
                        width={42}
                        height={62}
                        className="h-16 w-[2.75rem] cursor-pointer border-[1px] border-[#bebebe] object-cover"
                      />
                    </td>
                    <td className="p-[0.1875rem] align-top">
                      <h3
                        title="Dummy button"
                        className="cursor-pointer text-[#1c439b] hover:underline"
                      >
                        {character.character.name}
                      </h3>
                      <div className="mt-[0.125rem] text-[0.575rem]">
                        {character.role}
                      </div>
                    </td>
                    {!!character.voice_actors.length && (
                      <td className="p-[0.1875rem] text-right align-top">
                        <div className="text-[#1c439b]">
                          <span
                            title="Dummy button"
                            className="w-fit cursor-pointer hover:underline"
                          >
                            {character.voice_actors[0].person.name}
                          </span>
                        </div>
                        <div className="mt-[0.125rem] text-[0.575rem]">
                          {character.voice_actors[0].language}
                        </div>
                      </td>
                    )}
                    {!!character.voice_actors.length && (
                      <td className="w-[3.125rem] p-[0.1875rem] align-top">
                        <Image
                          title="Dummy button"
                          src={
                            character.voice_actors[0].person.images.jpg
                              .image_url || `/image_questionmark.webp`
                          }
                          alt={character.character.name}
                          width={42}
                          height={62}
                          className="h-16 w-[2.75rem] cursor-pointer border-[1px] border-[#bebebe] object-cover"
                        />
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        )}
        {!displayCharacters && (
          <div>{`No characters or voice actors have been added to this title.`}</div>
        )}
      </div>
    </div>
  );
};

export default AnimeCharacters;
