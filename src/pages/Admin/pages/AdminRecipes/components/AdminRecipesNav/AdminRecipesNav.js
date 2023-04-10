import { NavLink } from "react-router-dom";
import styles from './AdminRecipesNav.module.scss';

export default function AdminRecipesNav() {
    return (
        <ul className={styles.list}>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="list">Liste des recettes</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="new">Ajouter une recette</NavLink>
        </ul>
    )
}