import logo from "../img/planet.svg";
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <h1 className={styles.title}>my travel journal</h1>
    </header>
  );
}
