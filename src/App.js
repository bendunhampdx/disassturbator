import Nav from "./components/Nav/index.jsx";
import Main from "./components/Main/index.jsx";
// import Footer from "./components/Footer/index.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./App.scss";

function App() {
  <Helmet>
    <title>Disassturbator</title>
  </Helmet>;
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Nav />
        </Col>
        <Col md={10}>
          <Main />
        </Col>
        <Col md={12}>{/* <Footer /> */}</Col>
      </Row>
    </Container>
  );
}

export default App;
