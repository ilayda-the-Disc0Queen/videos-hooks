import axios from 'axios';

const KEY = 'AIzaSyD79Qj0RJTf953DOdaaWhhXPhkYBYez8Lg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
