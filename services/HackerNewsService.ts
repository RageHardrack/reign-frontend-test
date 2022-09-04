import { HttpAdapter } from "interfaces";
import { fetcher } from ".";

export class HackerNewsServices {
  private readonly baseUrl = process.env.NEXT_PUBLIC_API_URL;

  constructor(private readonly http: HttpAdapter) {}

  async getNews(url: string): Promise<any> {
    return await this.http.get(`${this.baseUrl}${url}`);
  }
}

export const HackerNewsService = new HackerNewsServices(fetcher);
