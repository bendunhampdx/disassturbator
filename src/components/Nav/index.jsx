import styles from "./Nav.module.scss";
import Logo from "../../images/dLogo.jpg";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Nav = () => {
  return (
    <Container className={styles.nav_meta}>
      <Row>
        <Col className={styles.inner}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.menu}>
            <MobileNavigation />
            <Navigation />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
