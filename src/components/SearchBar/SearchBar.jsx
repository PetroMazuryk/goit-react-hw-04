export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements.query.value);

    if (e.target.elements.query.value.trim() === '') {
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
