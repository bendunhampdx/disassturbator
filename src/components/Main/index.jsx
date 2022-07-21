import styles from "./Main.module.scss";
import Home from "../Home/index";
import News from "../News/index";
import Photos from "../Photos/index";
import Videos from "../Videos/index";
import Music from "../Music/index";
import Follow from "../Follow/index";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container className={styles.main}>
      <div className={styles.empty}></div>
      <div className={styles.main_content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/music" element={<Music />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </Container>
  );
};

export default Main;
