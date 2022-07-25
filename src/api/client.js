import axios from 'axios';

// export const mockApiInstance = axios.create({
//   baseURL: 'https://62cc50dba080052930a97fa6.mockapi.io/contacts/',
// });

export const connectionsApiInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const connectionsApiInstanceUser = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

connectionsApiInstanceUser.interceptors.request.use(function (config) {
  const authToken = localStorage.getItem('jwt_token');

  if (authToken) {
    return {
      ...config,
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    };
  }

  return config;
});
