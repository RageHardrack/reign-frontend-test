import { HttpAdapter } from "interfaces";

/**
 * Service fetcher using fetch API. It could adapt to use another library, like Axios, and it won't break the functionality of services in the app.
 */
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
