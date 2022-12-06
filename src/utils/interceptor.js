import axios from 'axios';

export const addJWTInterceptor = async (token) => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    (error) => Promise.reject(error)
  );
};

export const errorHandlerInterceptor = (dispatch) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error.response.status);
      // if (error.response.status === 401 || error.response.status === 403) {
      //   firebase.auth.logout();
      // }
      return Promise.reject(error);
    }
  );
};
