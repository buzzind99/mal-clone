import { GetStaticPaths } from "next";

interface IParams {
  params: {
    id: string;
  };
}

const characters = ({ animeData }: any) => {
  return <div>{animeData.url}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "5" } }],
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
