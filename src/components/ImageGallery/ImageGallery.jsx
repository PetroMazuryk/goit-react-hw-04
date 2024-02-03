import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';

export const ImageCallery = ({ items, onPhotoClick }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard item={item} onPhotoClick={onPhotoClick} />
        </li>
      ))}
    </ul>
  );
};
