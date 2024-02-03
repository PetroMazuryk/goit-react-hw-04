import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements.query.value);

    if (e.target.elements.query.value.trim() === '') {
      toast.error('EMPTY STRING. PLEASE ENTER A VALUE !!!');
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <MdOutlineScreenSearchDesktop className={css.icon} />
        </button>
        <input className={css.input} type="text" name="query" placeholder="Search images and photos" />
      </form>
    </header>
  );
};
