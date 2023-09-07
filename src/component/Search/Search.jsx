import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const Search = () => {
  return (
    <div>
      <form className={styles.wrapper}>
        <input type="text" placeholder="Search" className={styles.search} />
        <div>
          <button type="submit" className={styles.SearchBtn}>
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Search;
