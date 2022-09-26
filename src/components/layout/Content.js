import Recipe from "../Recipe";
import styles from "./Content.module.scss";
import { data } from "../../data/recipes";

export default function Content() {
    const recipes = data;

    return (
        <div className="flex-fill container pt-30">
            <h1 className="my-30">Decouvrez nos nouvelles recettes</h1>
            <div className={`card p-20 my-30 ${styles.contentCard}`}>
                <div className={styles.grid}>
                    {recipes.map( ({title, image}) => <Recipe title= {title} img= {image} />)}
                </div>
            </div>
        </div>
    )
}