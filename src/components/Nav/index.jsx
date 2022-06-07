import styles from "./Nav.module.scss";
import Logo from "../../images/dLogo.jpg";

const Nav = () => {
  return (
    <div className={styles.nav_meta}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.menu}>
        <ul>
          <li>news</li>
          <li>photos</li>
          <li>videos</li>
          <li>music</li>
          <li>follow</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
