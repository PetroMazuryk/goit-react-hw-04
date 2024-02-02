import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImageCallery } from './components/ImageGallery/ImageGallery';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import { Loader } from './components/Loader/Loader';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'IQfqBWFtUwIv7vwsJMmuzblOE_R_YD5Ct0w72vsl7Rw';

const IMAGES_PER_PAGE = 8;

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchArticles = async newQuery => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `${API_URL}?page=${page}&query=${query}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`
        );
        setPhotos(prevArticles => [...prevArticles, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchArticles} />

      {error && <b>Oops, there was an error, please try reloading 😅</b>}
      {photos.length > 0 && <ImageCallery items={photos} />}
      {loading && <Loader />}

      {photos.length > 0 && !photos.loading && <LoadMoreBtn onClick={handleLoadMore} />}

      <Toaster position="top-right" />
    </>
  );
};
