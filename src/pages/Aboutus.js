import { Container, Row, Col } from "react-bootstrap";
import "./Aboutus.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Box1 from "../components/Box1";
import About from "../components/About";
import Combar from "../components/Combar";
import Alumin from "../components/Alumin";
import Comsec from "../components/Comsec";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
const Aboutus = () => {
    return (
        <div>
            <div className="bock">
                <Container>
                    <Row>
                        <Col className="col-sm-6">
                            <div className="pagtit">
                                <h1>About Us</h1>
                            </div>
                        </Col>
                        <Col className="col-sm-6">
                            <div className="ollv">
                                <ul className="d-flex justify-content-end">
                                    <li><a href="/">Home</a></li>
                                    <li>/ About Us</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Box1 />
            <About />
            <Combar />
            <Alumin />
            <Comsec />
            <Courses />
            <Footer />
        </div>
    )
}

export default Aboutus