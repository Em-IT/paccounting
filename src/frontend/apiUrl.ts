const apiBaseUrl =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3003';
const apiPrefix = '/api';
const apiUrl = apiBaseUrl + apiPrefix;

export default apiUrl;