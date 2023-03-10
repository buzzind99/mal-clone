export interface INewsData {
  id: number;
  image_url: string;
  news_title: string;
  news_url: string;
  news_description: string;
  time_since_posted: string;
  author: string;
  author_url: string;
  forum_url: string;
  comment_count: number;
}

export interface IDiscussionsData {
  id: number;
  title: string;
  url: string;
  author: string;
  author_url: string;
  replies: number;
}

export interface IFeaturedData {
  id: number;
  title: string;
  url: string;
  image_url: string;
  description: string;
  author: string;
  author_url: string;
  views: number;
  spoiler: boolean;
}

export interface IReviewsData {
  id: number;
  title: string;
  anime_url: string;
  image_url: string;
  description: string;
  review_url: string;
  user: string;
  user_url: string;
  score: number;
  time_since_posted: string;
  preliminary: boolean;
}

export interface IRecommendationsData {
  id: number;
  anime: string;
  anime_url: string;
  image_url: string;
  anime_rec: string;
  anime_rec_url: string;
  image_rec_url: string;
  description: string;
  user: string;
  user_url: string;
  time_since_posted: string;
}

export interface ISeasonalAnimeData {
  id: number;
  anime: string;
  anime_url: string;
  image_url: string;
}

export interface ILatestEpisodesData {
  id: number;
  anime: string;
  anime_url: string;
  image_url: string;
  episodes: {
    episode: number;
    paid: boolean;
  }[];
}

export interface IPopularTrailersData {
  id: number;
  anime: string;
  anime_url: string;
  image_url: string;
  video_url: string;
  type: string;
}

export interface IAnimeStacksData {
  title: string;
  url: string;
  user: string;
  user_url: string;
  entries: string;
  restacks: string;
  image_1: string;
  image_2: string;
}

export interface IFooterTopAnimeData {
  name: string;
  url: string;
}

export interface IAnimeChartData {
  name: string;
  url: string;
  image_url: string;
  type: string;
  episodes: number;
  score: number | string;
  members: number;
}

export interface IAnimeData {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string | null;
      small_image_url: string | null;
      large_image_url: string | null;
    };
    webp: {
      image_url: string | null;
      small_image_url: string | null;
      large_image_url: string | null;
    };
  };
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
      image_url: string | null;
      small_image_url: string | null;
      medium_image_url: string | null;
      large_image_url: string | null;
      maximum_image_url: string | null;
    };
  };
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[] | null;
  type: string | null;
  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean;
  aired: {
    from: string | null;
    to: string | null;
    prop: {
      from: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    };
    string: string | null;
  };
  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  studios: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  explicit_genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  themes: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  demographics: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  relations: {
    relation: string;
    entry: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
  }[];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: {
    name: string;
    url: string;
  }[];
  streaming: {
    name: string;
    url: string;
  }[];
}

export interface IAnimeCharactersData {
  character: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string | null;
        small_image_url: string | null;
      };
      webp: {
        image_url: string | null;
        small_image_url: string | null;
      };
    };
    name: string;
  };
  favorites: number;
  role: string;
  voice_actors: {
    person: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string | null;
        };
      };
      name: string;
    };
    language: string;
  }[];
}
