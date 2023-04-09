import {useFetchRecipes } from "../../hooks";
import { updateRecipe as updateRecipeApi, deleteRecipe as deleteRecipeApi } from "../../apis";

import styles from "./Homepage.module.scss";

import Recipe from "./components/recipe/Recipe";
import Loading from "../../components/Loading/Loading";
import Search from "./components/search/Search";
import { useState } from "react";

export default function Homepage() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [[recipes, setRecipes], isLoading] = useFetchRecipes(page);

  async function updateRecipe(updatedRecipe) {
    const savedRecipe = await updateRecipeApi(updatedRecipe);
    setRecipes(
      recipes.map((recipe) => recipe._id === savedRecipe._id ? savedRecipe : recipe)
    );
  }

  async function deleteRecipe(_id) {
    await deleteRecipeApi(_id);
    setRecipes(recipes.filter((recipe) => recipe._id !== _id));
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
