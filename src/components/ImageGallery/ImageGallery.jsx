import css from './ImageGallery.module.css';
export const ImageCallery = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <div className="thumb">
            <img src={item.urls.small} alt={item.alt_description} />
          </div>

          <h2>{item.user.name}</h2>
          <p>{item.likes}</p>
        </li>
      ))}
    </ul>
  );
};
