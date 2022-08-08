import './styles.css';

export const SearchField = ({ searchValue, handleChange}) => {
    return (
        <input
            className="searchField"
            onChange={handleChange}
            value={searchValue}
            type="search"
            placeholder="Type the name of the pokemon"
        />
    );
};