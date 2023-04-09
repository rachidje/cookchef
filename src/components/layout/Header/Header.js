import styles from "./Header.module.scss";
import cookchef from "../../../assets/images/cookchef_logo.png";
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <NavLink to='/'>
          <img src={cookchef} alt="logo" />
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <NavLink to='/admin' >
          <button
            className="btn btn-primary mr-15"
          >
            Ajouter une recette
          </button>
        </NavLink>
        <button className="btn btn-reverse-primary mr-15">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(!showMenu)}
        className={`fa-solid fa-bars ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}
