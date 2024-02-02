import css from './ImageGallery.module.css';

export const ImageCallery = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.user.id}>
          <div className={css.wrapper}>
            <div className={css.thumb}>
              <img className={css.img} src={item.urls.small} alt={item.description} />
            </div>
            <div className={css.titleWrapper}>
              <h2>{item.user.name}</h2>
              <p className={css.likes}>{item.user.total_likes}</p>
              <p>Кількість фотографій: {item.user.total_photos}</p>
              <p>Кількість колекцій: {item.user.total_collections}</p>
              <p className={css.titleYear}> {item.user.updated_at}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
