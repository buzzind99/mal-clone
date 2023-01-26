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
  spoiler: true;
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
