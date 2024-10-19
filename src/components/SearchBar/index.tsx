import s from "./style.module.scss";
import { ImSearch } from "react-icons/im";

const SearchBar = () => {
  return (
    <div className={s.searchBar}>
      <ImSearch className={s.icon}/>
      <input
        className={s.searchInput}
        type="text"
        name="search"
        placeholder="Search character"
      />
    </div>
  );
};

export default SearchBar;
