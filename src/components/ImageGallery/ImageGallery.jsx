import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';

export const ImageCallery = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};
