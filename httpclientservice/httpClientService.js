import axios from "axios";
require("dotenv").config();

const apiKey = process.env.VACCOVID_API_KEY;

const config = {
  host: "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
  APIKey: apiKey,
};

class HttpClientApiService {
  constructor({ host, APIkey }) {
    let service = axios.create({
      headers: {
        "x-rapidapi-host": host,
        "x-rapidapi-key": APIkey,
      },
    });
    // service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, "/");
        break;
      case 404:
        this.redirectTo(document, "/404");
        break;
      default:
        this.redirectTo(document, "/500");
        break;
    }
    return Promise.reject(error);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };

  get(path, callback) {
    return this.service
      .get(path)
      .then((response) => callback(response.status, response.data));
  }
}

export default new HttpClientApiService(config);
