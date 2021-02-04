import { url } from "../utilities/url.js";

export default class Request {
  async sendRequest({ body, path, method }) {
    this.token = localStorage.getItem("token");
    if (method == "POST") {
      this.response = await fetch(`${url}/${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(body),
      });
      return await this.response.text();
    } else {
      this.response = await fetch(`${url}/${path}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
      return await this.response.text();
    }
  }
}
