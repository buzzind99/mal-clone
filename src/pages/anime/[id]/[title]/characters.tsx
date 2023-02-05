import { GetStaticPaths } from "next";

interface IParams {
  params: {
    id: string;
    title: string;
  };
}

const characters = ({ animeData }: any) => {
  return <div>{animeData.url}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: IParams[] = [];
  const json = await import(`@/data/anime/animePaths.json`).then(
    (res) => res.default
  );

  json.slice(0, 2).forEach((anime) => {
    paths.push({ params: { id: anime.id.toString(), title: anime.title } });
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

  return {
    props: { animeData },
  };
};

export default characters;
