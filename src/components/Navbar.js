import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navlink}>Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}