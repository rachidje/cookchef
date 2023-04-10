import { useFetchRecipes } from "../../../../../../hooks/useFetchRecipes"
import styles from './AdminRecipesList.module.scss';
import { deleteRecipe as deleteRecipeApi } from "../../../../../../apis";

export default function AdminRecipesList() {

    const [[recipes, setRecipes]] = useFetchRecipes();

    async function deleteRecipe(_id) {
        await deleteRecipeApi(_id);
        setRecipes(recipes.filter(r => r._id !== _id));
    }

    return (
        <ul className={styles.list}>
            {
            recipes.length ? recipes.map((r) => 
                <li key={r._id} className="d-flex align-items-center">
                    <span className="flex-fill">{r.title}</span>
                    <button className="btn btn-primary mr-15">Editer</button>
                    <button onClick={() => deleteRecipe(r._id)} className="btn btn-danger">Supprimer</button>
                </li>) 
            : 
            null 
            }
        </ul>
    )
}