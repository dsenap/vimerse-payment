import axios from 'axios';
import queryString from 'query-string';

class HttpClient {
  instance;

  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError);
  };

  _handleResponse = ({ data, status }) => ({ data, status });

  _handleError = ({ response }) => ({ data: response?.data, status: response?.status });

  generateQuery(queryParams) {
    return queryString.stringify(queryParams);
  }
}

export default HttpClient;
