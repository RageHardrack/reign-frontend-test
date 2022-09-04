import { HttpAdapter } from "interfaces";

export class Fetcher implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      method: "GET",
    });
    const json = await response.json();

    return json;
  }
}

export const fetcher = new Fetcher();
