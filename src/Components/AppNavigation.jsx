import { NavLink } from "react-router-dom"
import styles from './AppNavigation.module.css'
function AppNavigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="description">Description</NavLink>
                </li>
                <li>
                    <NavLink to="specification">Specification</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AppNavigation
