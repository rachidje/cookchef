import styles from './HeaderMenu.module.scss';

function HeaderMenu() {
    return (
        <ul className={`${styles.menuContainer} card`}>
            <li>Wishlist</li>
            <li>Connexion</li>
        </ul>
    )
}

export default HeaderMenu;