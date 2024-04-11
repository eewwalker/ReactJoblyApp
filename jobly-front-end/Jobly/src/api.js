
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get all companies */
  static async getCompanies(searchData) {
    let data = "";
    if (searchData.length !== 0) {
      data = { nameLike: searchData };
    }

    let res = await this.request(`companies`, data);
    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs(searchData) {
    let data = "";
    if (searchData.length !== 0) {
      data = { title: searchData };
    }

    let res = await this.request(`jobs`, data);
    return res.jobs;
  }

  //AUTH ROUTES
  /** method for user signup: set token to user token and return token */
  static async signUp(userData) {
    let res = await this.request('auth/register', userData, "POST");
    JoblyApi.token = res.token;
    return res.token;
  }
  /** method for user login: set token to user token and return token */
  static async login(userData) {
    let res = await this.request('auth/token', userData, "POST");
    JoblyApi.token = res.token;
    return res.token;
  }

  /** method for user login: set token to user token and return token */
  static async getUserData(username) {
    let userData = await this.request(`users/${username}`);
    return userData.user;
  }

  static resetToken() {
    JoblyApi.token = '';
  }

}

export default JoblyApi;