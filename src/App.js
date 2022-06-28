import Nav from "./components/Nav/index.jsx";
import Main from "./components/Main/index.jsx";
import Footer from "./components/Footer/index.jsx";
import styles from "./App.scss";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
