import { useEffect, useState } from 'react';
import { ImageCallery } from './components/ImageGallery/ImageGallery';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import { Loader } from './components/Loader/Loader';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { fetchApi } from './servises/FetchApi';
import { ImageModal } from './components/ImageModal/ImageModal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState('');

  const per_pages = 8;

  const searchPhotos = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
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

        const fetchData = await fetchApi(query.split('/')[1], page, per_pages);

        const totalPages = fetchData.total_pages;
        setTotalPages(totalPages);
        setPhotos(prevPhotos => [...prevPhotos, ...fetchData.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  const openModal = photoUrl => {
    setSelectedPhotoUrl(photoUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={searchPhotos} />

      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageCallery items={photos} onPhotoClick={openModal} />
      )}
      {loading && <Loader />}

      {photos.length > 0 && !photos.loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <Toaster position="top-right" />

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedPhotoUrl}
      />
    </>
  );
};
