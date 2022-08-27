import styles from "./Recipe.module.scss";
import recipeImg from "../assets/images/pavlova.jpeg"

export default function Recipe() {
    return (
        <div className={styles.recipe}>
            <div className={styles.recipeImage}>
                <img src={recipeImg} alt="Recipe" />
            </div>
            <div className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}>
                <h3>Pavlova Express</h3>
            </div>
        </div>
    )
}