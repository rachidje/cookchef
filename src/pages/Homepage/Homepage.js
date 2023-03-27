import Recipe from "./components/recipe/Recipe";
import styles from "./Homepage.module.scss";
import { useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import Search from "./components/search/Search";

export default function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const BASE_URL_API = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${BASE_URL_API}?skip=${(page - 1) * 18}&limit=18`
        );
        if (response.ok && !cancel) {
          const newRecipes = await response.json();
          setRecipes((x) =>
            Array.isArray(newRecipes)
              ? [...x, ...newRecipes]
              : [...x, newRecipes]
          );
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
  }, [BASE_URL_API, page]);

  function updateReceipe(updatedRecipe) {
    setRecipes(
      recipes.map((recipe) =>
        recipe._id === updatedRecipe._id ? updatedRecipe : recipe
      )
    );
  }

  function handleClickLoadMore() {
    setPage(page + 1);
  }

  return (
    <div className="flex-fill container d-flex flex-column pt-30">
      <h1 className="my-30">
        Decouvrez nos nouvelles recettes ( <small>{recipes.length}</small> )
      </h1>
      <div
        className={`card flex-fill p-20 my-30 d-flex flex-column ${styles.contentCard}`}
      >
        <Search setFilter={setFilter} />
        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((recipe) => (
                <Recipe
                  key={recipe._id}
                  recipe={recipe}
                  toggleLikeRecipe={updateReceipe}
                />
              ))}
          </div>
        )}
        <div className="d-flex flex-row justify-content-center align-items-center p-20">
          <button onClick={handleClickLoadMore} className="btn btn-primary">
            Plus de recettes
          </button>
        </div>
      </div>
    </div>
  );
}
