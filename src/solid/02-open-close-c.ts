// import axios from "axios";

export class HttpClient {
  async get(url: string) {
    const res = await fetch(url);
    const data = await res.json();

    return { data, status: res.status };
  }
}
