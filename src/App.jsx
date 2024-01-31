import axios from 'axios';
import { useState } from 'react';
import { ImageCallery } from './components/ImageGallery/ImageGallery';
import { SearchBar } from './components/SearchBar/SearchBar';

const API_URL = 'https://api.unsplash.com/photos';

const IMAGES_PER_PAGE = 8;

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchArticles = async query => {
    try {
      setLoading(true);
      setArticles([]);
      const response = await axios.get(
        `${API_URL}?query=${query}&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(response.data);
      setArticles(response.data);
      setLoading(false);
    } catch (error) {}
  };

  return (
    <>
      <SearchBar onSearch={searchArticles} />
      {loading && <b>Loading articles, please wait ...</b>}
      {articles.length > 0 && <ImageCallery items={articles} />}
    </>
  );
};
