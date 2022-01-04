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
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    console.error(error);
    return Promise.reject(error);
  };

  get(path, callback) {
    return this.service
      .get(path)
      .then((response) => callback(response.status, response.data));
  }
}

export default new HttpClientApiService(config);
