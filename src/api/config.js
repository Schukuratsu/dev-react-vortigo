import Axios from "axios";

const config = {
  backendUrl: process.env.REACT_APP_BACKEND_URL,
  token: null,
};

export const setup = ({ token }) => {
  config.token = token;
};

export default (options) =>
  Axios({
    ...options,
    headers: {
      ...Axios.defaults.headers.common,
      "Access-Control-Allow-Origin": "https://39f90812cb63.ngrok.io",
      "Content-Type": "application/json",
      Authorization: config.token ? `Token ${config.token}` : undefined,
    },
    baseURL: config.backendUrl,
  });
