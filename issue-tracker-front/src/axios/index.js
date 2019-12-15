import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://issue-tracker-backend.test/api/',
  //headers: {'X-Custom-Header': 'foobar'}
});

ax.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if(token){
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default ax;