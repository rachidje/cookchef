import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div
      className={`d-flex flex-row justify-content-center align-items-center flex-fill ${styles.loading}`}
    >
      <i className="fa-solid fa-spinner"></i>
    </div>
  );
}
