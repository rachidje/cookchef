import styles from "./Search.module.scss";

export default function Search({ setFilter }) {
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div
      className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchbar}`}
    >
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onInput={handleInput}
        className="flex-fill"
        type="text"
        name="search"
        id="search"
        placeholder="Rechercher"
      />
    </div>
  );
}
