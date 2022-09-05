import { HackerNewsResponse, Hit, HttpAdapter, INews } from "interfaces";
import { hitsTransformer } from "utils";
import { fetcher } from ".";

/**
 * Services class to fetch the data from the public API
 */
export class HackerNewsServices {
  private readonly baseUrl = process.env.NEXT_PUBLIC_API_URL!;

  constructor(private readonly http: HttpAdapter) {}

  /**
   * Service to fetch and clean the attributes to use for the UI. If any of these attributes are not present in the object response, the data is discard.
   */
  async getNews(url: string): Promise<INews> {
    const response = await this.http.get<HackerNewsResponse>(
      `${this.baseUrl}${url}`
    );

    const newsTransform = response.hits.map((hit: Hit) => hitsTransformer(hit));

    const cleanNews = newsTransform.filter(
      (item) =>
        !!item.author &&
        !!item.story_title &&
        !!item.story_url &&
        !!item.created_at
    );

    return {
      nbHits: response.nbHits,
      page: response.page,
      nbPages: response.nbPages,
      news: cleanNews,
    };
  }
}

export const HackerNewsService = new HackerNewsServices(fetcher);
