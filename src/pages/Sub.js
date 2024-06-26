import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import Footer from '../components/Footer';
import Courses from '../components/Courses';
const Sub = () => {
    return (
        <div>
            <div className="bock">
                <Container>
                    <Row>
                        <Col className="col-sm-6">
                            <div className="pagtit">
                                <h1>Development Courses</h1>
                            </div>
                        </Col>
                        <Col className="col-sm-6">
                            <div className="ollv">
                                <ul className="d-flex justify-content-end">
                                    <li><a href="/">Home</a></li>
                                    <li>/ <a href="">Development Courses</a> </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="crt">
                            <span className=" sp cb">BEST COURSES</span>
                            <h2>Learn Multimedia Courses with Job Placement</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0045_Android.webp" />
                            <Card.Body>
                                <Card.Title><a href="">Master In Web Development</a></Card.Title>
                                <p className='text-start'>The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the...</p>
                            </Card.Body>
                            <div className="card-footer d-flex">
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
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0001_web-developments.webp" />
                            <Card.Body>
                                <Card.Title><a href="">Master In Web Development</a></Card.Title>
                                <p className='text-start'>The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the...</p>
                            </Card.Body>
                            <div className="card-footer d-flex">
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
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0023_Game-Development.webp" />
                            <Card.Body>
                                <Card.Title><a href="">Master In Web Development</a></Card.Title>
                                <p className='text-start'>The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the...</p>
                            </Card.Body>
                            <div className="card-footer d-flex">
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
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0024_full-stack.webp" />
                            <Card.Body>
                                <Card.Title><a href="">Master In Web Development</a></Card.Title>
                                <p className='text-start'>The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the...</p>
                            </Card.Body>
                            <div className="card-footer d-flex">
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
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0032_data-science.webp" />
                            <Card.Body>
                                <Card.Title><a href="">Master In Web Development</a></Card.Title>
                                <p className='text-start'>The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the...</p>
                            </Card.Body>
                            <div className="card-footer d-flex">
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
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0043_ASP_NET.webp" />
                            <Card.Body>
                                <Card.Title><a href="">Master In Web Development</a></Card.Title>
                                <p className='text-start'>The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the...</p>
                            </Card.Body>
                            <div className="card-footer d-flex">
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
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0009_React-Native.webp" />
                            <Card.Body>
                                <Card.Title><a href="">Master In Web Development</a></Card.Title>
                                <p className='text-start'>The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the...</p>
                            </Card.Body>
                            <div className="card-footer d-flex">
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
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/courses@1x/_0025_Flutter.webp" />
                            <Card.Body>
                                <Card.Title><a href="">Master In Web Development</a></Card.Title>
                                <p className='text-start'>The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the...</p>
                            </Card.Body>
                            <div className="card-footer d-flex">
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
                </Row>
            </Container>
            <Courses/>
            <Footer/>
        </div>
    )
}

export default Sub