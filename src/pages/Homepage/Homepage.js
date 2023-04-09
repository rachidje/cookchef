import { ApiContext } from "../../context/ApiContext";
import { useContext, useState } from "react";
import {useFetchRecipes } from "../../hooks";

import styles from "./Homepage.module.scss";

import Recipe from "./components/recipe/Recipe";
import Loading from "../../components/Loading/Loading";
import Search from "./components/search/Search";

export default function Homepage() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const BASE_URL_API = useContext(ApiContext);

  const [[recipes, setRecipes], isLoading] = useFetchRecipes(page);

  async function updateRecipe(updatedRecipe) {
    try {
      const { _id, ...restRecipe } = updatedRecipe;
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(restRecipe),
      });

      if (response.ok) { 
        const updatedRecipe = await response.json();
        setRecipes(
          recipes.map((recipe) =>
            recipe._id === updatedRecipe._id ? updatedRecipe : recipe
          )
        );
      }
    } catch (error) {
      console.log("Error");
    }
  }

  async function deleteRecipe(_id) {
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setRecipes(recipes.filter((recipe) => recipe._id !== _id));
      }
    } catch (error) {
      console.log("Error");
    }
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
                  updateRecipe={updateRecipe}
                  deleteRecipe={deleteRecipe}
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
