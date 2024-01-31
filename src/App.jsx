import axios from 'axios';
import { useState } from 'react';
import { ImageCallery } from './components/ImageGallery/ImageGallery';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';

const API_URL = 'https://api.unsplash.com/photos';

const IMAGES_PER_PAGE = 8;

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchArticles = async query => {
    try {
      setError(false);
      setArticles([]);
      setLoading(true);
      const response = await axios.get(
        `${API_URL}?query=${query}&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(response.data);
      setArticles(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={searchArticles} />
      {loading && <b>Loading articles, please wait ...</b>}
      {error && <b>Oops, there was an error, please try reloading 😅</b>}
      {articles.length > 0 && <ImageCallery items={articles} />}
      <Toaster position="top-right" />
    </>
  );
};
