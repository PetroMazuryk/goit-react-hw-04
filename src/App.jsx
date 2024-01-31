import axios from 'axios';
import { useEffect, useRef } from 'react';

const API_URL = 'https://api.unsplash.com/search/photos';

const IMAGES_PER_PAGE = 20;

export const App = () => {
  const searchInput = useRef(null);

  useEffect(() => {
    async function fetchArticles() {
      const result = await axios.get(
        `${API_URL}?query=${searchInput.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(result.data);
    }

    fetchArticles();
  }, []);

  const handleSearch = evt => {
    evt.preventDefault();
    console.log(searchInput.current.value);
  };

  return (
    <>
      <h1>Latest articles</h1>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search images and photos" />
      </form>
    </>
  );
};
