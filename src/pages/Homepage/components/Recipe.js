import { useState } from "react";
import styles from "./Recipe.module.scss";

export default function Recipe({ title, img }) {
  const [liked, setLiked] = useState(false);

  function handleClickLike(e) {
    e.preventDefault();
    setLiked(!liked);
  }

  return (
    <div onClick={handleClickLike} className={styles.recipe}>
      <div className={styles.recipeImage}>
        <img src={img} alt="Recipe" />
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
