import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const links = [
  { to: "/", label: "Hero", end: true },
  { to: "/case-study", label: "Case Study" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.mark}>UM</span>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
