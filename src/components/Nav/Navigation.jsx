import NavLinks from "./NavLinks";
import styles from "./Nav.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
