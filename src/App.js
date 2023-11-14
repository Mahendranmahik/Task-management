
// import { Col, Container, Row } from "react-bootstrap";
// import "./App.css";
// import Heading from "./comp/Heading";
// import Inputs from "./comp/Inputs";
// import Tasklist from "./comp/Tasklist";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Container from "./../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import TasksList from "./components/TasksList";

function App() {
  return (
    
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col  lg="6">
          <AddTask />
          <TasksList/>
        </Col>
      </Row>
    </Container>
 
  );
}

export default App;
