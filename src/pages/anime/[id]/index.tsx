import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IParams {
  params: {
    id: string;
  };
}

const Anime = ({ mal_id, url }: any) => {
  const router = useRouter();
  const title_url = url.match(/[^\/]+$/);

  useEffect(() => {
    router.push(`/anime/${mal_id}/${title_url}`);
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

  return {
    props: { mal_id, url },
  };
};

export default Anime;
