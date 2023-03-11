import Recipe from "./components/Recipe";
import styles from "./Homepage.module.scss";
import { data } from "../../data/recipes";
import { useState } from "react";

export default function Content() {
  const recipes = data;
  const [filter, setFilter] = useState("");

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className="flex-fill container pt-30">
      <h1 className="my-30">Decouvrez nos nouvelles recettes</h1>
      <div
        className={`card p-20 my-30 d-flex flex-column ${styles.contentCard}`}
      >
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
        <div className={styles.grid}>
          {recipes
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map(({ title, _id, image }) => (
              <Recipe key={_id} title={title} img={image} />
            ))}
        </div>
      </div>
    </div>
  );
}
