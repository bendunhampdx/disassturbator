import styles from "./Nav.module.scss";
import Logo from "../../images/dLogo.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.nav_meta}>
      <div className={styles.logo}>
        <Link to="/home">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link to="/news">news</Link>
          </li>
          <li>
            <Link to="/photos">photos</Link>
          </li>
          <li>
            <Link to="/videos">videos</Link>
          </li>
          <li>
            <Link to="/music">music</Link>
          </li>
          <li>
            <Link to="/follow">follow</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
