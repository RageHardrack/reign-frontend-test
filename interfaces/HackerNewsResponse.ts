// Generated by https://quicktype.io

export interface HackerNewsResponse {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: Exhaustive;
  query: Query;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
}

export interface INews {
  nbHits: number;
  page: number;
  nbPages: number;
  news: INewsContent[];
}

export interface INewsContent {
  story_id: number;
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
}

export enum Query {
  Angular = "angular",
  VueJS = "vuejs",
  ReactJS = "reactjs",
}

export interface Exhaustive {
  nbHits: boolean;
  typo: boolean;
}

export interface Hit {
  created_at: string;
  title: null;
  url: null;
  author: string;
  points: null;
  story_text: null;
  comment_text: string;
  num_comments: null;
  story_id: number;
  story_title: string;
  story_url: string;
  parent_id: number;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  author: Author;
  comment_text: Author;
  story_title: Author;
  story_url?: Author;
}

export interface Author {
  value: string;
  matchLevel: string;
  matchedWords: string[];
  fullyHighlighted?: boolean;
}

export interface ProcessingTimingsMS {
  afterFetch: AfterFetch;
  fetch: Fetch;
  total: number;
}

export interface AfterFetch {
  format: Format;
  total: number;
}

export interface Format {
  highlighting: number;
  total: number;
}

export interface Fetch {
  total: number;
}