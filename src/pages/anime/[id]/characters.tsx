import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IParams {
  params: {
    id: string;
  };
}

interface Props {
  mal_id: number;
  title_url: string;
}

const AnimeCharacters = ({ mal_id, title_url }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/anime/${mal_id}/${title_url}/characters`);
  }, []);
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: IParams[] = [];
  const json = await import(`@/data/anime/animePaths.json`).then(
    (res) => res.default
  );

  json.slice(0, 2).forEach((anime) => {
    paths.push({ params: { id: anime.id.toString() } });
  });

  paths.push({ params: { id: "44909" } });
  paths.push({ params: { id: "50265" } });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: IParams) => {
  const { id } = context.params;

  const animeData = await import(`@/data/anime/${id}.json`).then(
    (res) => res.default.data
  );
  const { mal_id, url } = animeData;
  const title_url = url.match(/[^\/]+$/);

  return {
    props: { mal_id, title_url },
  };
};

export default AnimeCharacters;
