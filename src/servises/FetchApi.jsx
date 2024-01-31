import axios from 'axios';
import { useEffect, useRef } from 'react';
// import { ArticleList } from './components/ArticleList/ArticleList';
// import { SearchBar } from './components/SearchBar/SearchBar';

const API_URL = 'https://api.unsplash.com/search/photos';

const IMAGES_PER_PAGE = 20;

export const App = () => {
  const searchInput = useRef(null);
  // console.log(import.meta.env.VITE_API_KEY);
  // const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const result = await axios.get(
        `${API_URL}?query=${searchInput.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(result.data);
      // setArticles(response.data.hits);
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
      {/* <SearchBar /> */}
    </>
  );
};
