import axios from 'axios';

export default axios.create({
  baseURL: 'https://banking-app-0.herokuapp.com/api/v1',
});
