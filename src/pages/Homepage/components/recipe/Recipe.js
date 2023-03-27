import { useContext } from "react";
import { ApiContext } from "../../../../context/ApiContext";
import styles from "./Recipe.module.scss";

export default function Recipe({
  recipe: { _id, title, image, liked },
  toggleLikeRecipe,
}) {
  const BASE_URL_API = useContext(ApiContext);

  async function handleClickLike() {
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ liked: !liked }),
      });

      if (response.ok) {
        const updatedRecipe = await response.json();
        toggleLikeRecipe(updatedRecipe);
      }
    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <div onClick={handleClickLike} className={styles.recipe}>
      <div className={styles.recipeImage}>
        <img src={image} alt="Recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-20">{title}</h3>
        <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""} `}></i>
      </div>
    </div>
  );
}
