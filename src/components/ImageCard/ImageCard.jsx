import css from './ImageCard.module.css';

export const ImageCard = ({
  item: { urls, description, user },
  onPhotoClick,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.thumb}>
        <img
          className={css.img}
          src={urls.small}
          alt={description}
          onClick={() => onPhotoClick(urls.regular)}
        />
      </div>
      <div className={css.titleWrapper}>
        <h2>{user.name}</h2>
        <p className={css.likes}>{user.total_likes}</p>
        <p>Кількість фотографій: {user.total_photos}</p>
        <p>Кількість колекцій: {user.total_collections}</p>
        <p className={css.titleYear}> {user.updated_at}</p>
      </div>
    </div>
  );
};
