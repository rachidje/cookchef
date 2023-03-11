import Recipe from "./components/Recipe";
import styles from "./Homepage.module.scss";
import { useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";

export default function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const BASE_URL_API = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL_API);
        if (response.ok && !cancel) {
          const recipes = await response.json();
          setRecipes(Array.isArray(recipes) ? recipes : [recipes]);
        }
      } catch (error) {
        console.log("ERROR");
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    }

    fetchRecipes();

    return () => (cancel = true);
  }, [BASE_URL_API]);

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className="flex-fill container d-flex flex-column pt-30">
      <h1 className="my-30">Decouvrez nos nouvelles recettes</h1>
      <div
        className={`card flex-fill p-20 my-30 d-flex flex-column ${styles.contentCard}`}
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
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map(({ title, _id, image }) => (
                <Recipe key={_id} title={title} img={image} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
