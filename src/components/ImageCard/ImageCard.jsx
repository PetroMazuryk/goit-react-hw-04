import css from './ImageCard.module.css';

export const ImageCard = ({ item }) => {
  <div>
    <div className={css.thumb}>
      <img src={item.urls.small} alt={item.description} />
    </div>

    <h2>{item.user.name}</h2>
    <p>{item.user.total_likes}</p>
    <p>Кількість фотографій: {item.user.total_photos}</p>
    <p>Кількість колекцій: {item.user.total_collections}</p>
    <p> {item.user.updated_at}</p>
  </div>;
};