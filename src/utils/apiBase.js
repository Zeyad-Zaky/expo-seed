const getBaseUrl = () => {
  switch (process.env.REACT_APP_ENV || 'development') {
    case 'development':
      return 'https://jsonplaceholder.typicode.com';
    case 'staging':
      return 'https://jsonplaceholder.typicode.com';
    case 'production':
      return 'https://jsonplaceholder.typicode.com';
    default:
      return 'https://jsonplaceholder.typicode.com';
  }
};

const API_BASE_URL = getBaseUrl();

export default API_BASE_URL;
