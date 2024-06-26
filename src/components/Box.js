import "./Box.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
export const Box = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="crt">
                            <span className=" sp cb">CREATIVE COURSES</span>
                            <h2>OFFERED COURSES</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0023_Game-Development.webp" />
                            <Card.Body>
                                <Card.Title><a href="/Sub">Development Courses</a></Card.Title>
                            </Card.Body>
                            <div className="card-footer d-flex lmk">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                                <Button variant="primary">
                                    <a href="/Sub">Know more..!</a>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card>
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0023_Game-Development.webp" />
                            <Card.Body>
                                <Card.Title><a href="/Sub">Development Courses</a></Card.Title>
                            </Card.Body>
                            <div className="card-footer d-flex lmk">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                                <Button variant="primary"><a href="/Sub">Know more..!</a></Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card>
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0023_Game-Development.webp" />
                            <Card.Body>
                                <Card.Title><a href="/Sub">Development Courses</a></Card.Title>
                            </Card.Body>
                            <div className="card-footer d-flex lmk">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                                <Button variant="primary"><a href="/Sub">Know more..!</a></Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card>
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0023_Game-Development.webp" />
                            <Card.Body>
                                <Card.Title><a href="/Sub">Development Courses</a></Card.Title>
                            </Card.Body>
                            <div className="card-footer d-flex lmk">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                                <Button variant="primary"><a href="/Sub">Know more..!</a></Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card>
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0023_Game-Development.webp" />
                            <Card.Body>
                                <Card.Title><a href="/Sub">Development Courses</a></Card.Title>
                            </Card.Body>
                            <div className="card-footer d-flex lmk">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                                <Button variant="primary"><a href="/Sub">Know more..!</a></Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card>
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0023_Game-Development.webp" />
                            <Card.Body>
                                <Card.Title><a href="/Sub">Development Courses</a></Card.Title>
                            </Card.Body>
                            <div className="card-footer d-flex lmk">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                                <Button variant="primary"><a href="/Sub">Know more..!</a></Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <a href="/Sub" className="btn  but">View All Courses</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Box;
