import axios from "axios";
// let config = require(process.env.BASE_URL+'.env');

try {
  // const dotenv = require("dotenv").config({path: BPth});
  // const buf = Buffer.from(window.CONFIG);
  // const opt = { debug: false };
  // config = dotenv.parse(buf, opt);
} catch (error) { }

var base_url = window.location.origin;
// console.log({ base_url });
let url =
  (base_url.indexOf("localhost:") > -1) | (base_url.indexOf("192.168") > -1) | (base_url.indexOf(".netlify") > -1)
    ? process.env.VUE_APP_API
    : base_url;
//   config && config["API_BASE"]
//     ? config["API_BASE"]
//     : process.env.VUE_APP_API || base_url;

// console.log(url);
const HTTP = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  get: (url, request) => {
    return HTTP.get(url, request)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  post: (url, request) => {
    return HTTP.post(url, request)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  patch: (url, request) => {
    return HTTP.patch(url, request)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  put: (url, request) => {
    return HTTP.put(url, request)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  remove: (url, request) => {
    return HTTP.delete(url, request)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  }
};
