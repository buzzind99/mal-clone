import { IAnimeData } from "./interfaces";

export const initialAnimeData: IAnimeData = {
  mal_id: 0,
  url: "",
  images: {
    jpg: {
      image_url: null,
      small_image_url: null,
      large_image_url: null,
    },
    webp: {
      image_url: null,
      small_image_url: null,
      large_image_url: null,
    },
  },
  trailer: {
    youtube_id: null,
    url: null,
    embed_url: null,
    images: {
      image_url: null,
      small_image_url: null,
      medium_image_url: null,
      large_image_url: null,
      maximum_image_url: null,
    },
  },
  approved: false,
  titles: [
    {
      type: "",
      title: "",
    },
  ],
  title: "",
  title_english: null,
  title_japanese: null,
  title_synonyms: null,
  type: null,
  source: null,
  episodes: null,
  status: null,
  airing: false,
  aired: {
    from: null,
    to: null,
    prop: {
      from: {
        day: null,
        month: null,
        year: null,
      },
      to: {
        day: null,
        month: null,
        year: null,
      },
    },
    string: null,
  },
  duration: null,
  rating: null,
  score: null,
  scored_by: null,
  rank: null,
  popularity: null,
  members: null,
  favorites: null,
  synopsis: null,
  background: null,
  season: null,
  year: null,
  broadcast: {
    day: null,
    time: null,
    timezone: null,
    string: null,
  },
  producers: [
    {
      mal_id: 0,
      type: "",
      name: "",
      url: "",
    },
  ],
  licensors: [
    {
      mal_id: 0,
      type: "",
      name: "",
      url: "",
    },
  ],
  studios: [
    {
      mal_id: 0,
      type: "",
      name: "",
      url: "",
    },
  ],
  genres: [
    {
      mal_id: 0,
      type: "",
      name: "",
      url: "",
    },
  ],
  explicit_genres: [
    {
      mal_id: 0,
      type: "",
      name: "",
      url: "",
    },
  ],
  themes: [
    {
      mal_id: 0,
      type: "",
      name: "",
      url: "",
    },
  ],
  demographics: [
    {
      mal_id: 0,
      type: "",
      name: "",
      url: "",
    },
  ],
  relations: [
    {
      relation: "",
      entry: [
        {
          mal_id: 0,
          type: "",
          name: "",
          url: "",
        },
      ],
    },
  ],
  theme: {
    openings: [""],
    endings: [""],
  },
  external: [
    {
      name: "",
      url: "",
    },
  ],
  streaming: [
    {
      name: "",
      url: "",
    },
  ],
};
