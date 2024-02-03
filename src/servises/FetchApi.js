import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'IQfqBWFtUwIv7vwsJMmuzblOE_R_YD5Ct0w72vsl7Rw';

const IMAGES_PER_PAGE = 8;

export const fetchApi = async (query, page) => {
  const response = await axios.get(`${API_URL}`, {
    params: {
      page,
      query,
      per_page: IMAGES_PER_PAGE,
      client_id: API_KEY,
    },
  });
  return response.data.results;
};
