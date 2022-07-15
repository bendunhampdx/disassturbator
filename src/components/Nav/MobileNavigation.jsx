import NavLinks from "./NavLinks";
import styles from "./Nav.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <GiHamburgerMenu
      className={styles.hamburger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className={styles.hamburger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className={styles.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
