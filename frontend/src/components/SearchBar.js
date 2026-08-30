const SearchBar = ({
  searchTerm,
  setSearchTerm
}) => {

  return (
    <input
      type="text"
      placeholder="Search employees..."
      value={searchTerm}
      onChange={(event) =>
        setSearchTerm(event.target.value)
      }
    />
  );
};

export default SearchBar;