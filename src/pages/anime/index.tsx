import { useRouter } from "next/router";
import { useEffect } from "react";

const Anime = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/under_construction`);
  }, []);
};

export default Anime;
