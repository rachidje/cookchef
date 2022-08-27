import styles from "./Content.module.scss";

export default function Content() {
    return (
        <div className="flex-fill container pt-30">
            <h1 className="my-30">Decouvrez nos nouvelles recettes</h1>
            <div className={`card p-20 ${styles.contentCard}`}>
                <div className={styles.grid}>
                    <div className={styles.elem}>ELEMENT</div>
                    <div className={styles.elem}>ELEMENT</div>
                    <div className={styles.elem}>ELEMENT</div>
                    <div className={styles.elem}>ELEMENT</div>
                    <div className={styles.elem}>ELEMENT</div>
                    <div className={styles.elem}>ELEMENT</div>
                </div>
            </div>
        </div>
    )
}