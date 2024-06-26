import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Event.css"
import Comsec from '../components/Comsec';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
const Eavent = () => {
    return (
        <div>
            <div className="bock mb-5">
                <Container>
                    <Row>
                        <Col className="col-sm-6">
                            <div className="pagtit">
                                <h1>CDMI's Latest Events</h1>
                            </div>
                        </Col>
                        <Col className="col-sm-6">
                            <div className="ollv">
                                <ul className="d-flex justify-content-end">
                                    <li><a href="/">Home</a></li>
                                    <li>/ Events</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/events/thumbnail/beyond-post-banner.jpg" />
                            <Card.Body>
                                <Card.Title className='text-start'><a href="/Sub">Beyond The Boundaries 2023</a></Card.Title>
                                <span className='pral'>
                                    <a href="/Sub" className=''><h6> Creative Multimedia</h6></a>
                                    <p>IT Park Fifad Developers</p>
                                </span>
                            </Card.Body>
                            <div className="card-footer ">
                                <p className='text-black'>Creative Design & Multimedia Institute had organized a Beyond The Bondaries to Fifad Developers (Canal to Airport Road, Opp La</p>
                                <Button variant="primary" className='klm'>
                                    <a href="/Sub">Know more..!</a>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/events/thumbnail/ADANI-VISIT.jpg" />
                            <Card.Body>
                                <Card.Title className='text-start'><a href="/Sub">Beyond The Boundaries 2023</a></Card.Title>
                                <span className='pral'>
                                    <a href="/Sub" className=''><h6> Creative Multimedia</h6></a>
                                    <p>IT Park Fifad Developers</p>
                                </span>
                            </Card.Body>
                            <div className="card-footer ">
                                <p className='text-black'>Creative Design & Multimedia Institute had organized a Beyond The Bondaries to Fifad Developers (Canal to Airport Road, Opp La</p>
                                <Button variant="primary" className='klm'>
                                    <a href="/Sub">Know more..!</a>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/events/thumbnail/SPORT-2019.jpg" />
                            <Card.Body>
                                <Card.Title className='text-start'><a href="/Sub">Beyond The Boundaries 2023</a></Card.Title>
                                <span className='pral'>
                                    <a href="/Sub" className=''><h6> Creative Multimedia</h6></a>
                                    <p>IT Park Fifad Developers</p>
                                </span>
                            </Card.Body>
                            <div className="card-footer ">
                                <p className='text-black'>Creative Design & Multimedia Institute had organized a Beyond The Bondaries to Fifad Developers (Canal to Airport Road, Opp La</p>
                                <Button variant="primary" className='klm'>
                                    <a href="/Sub">Know more..!</a>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/events/thumbnail/IT-TRAINING.jpg" />
                            <Card.Body>
                                <Card.Title className='text-start'><a href="/Sub">Beyond The Boundaries 2023</a></Card.Title>
                                <span className='pral'>
                                    <a href="/Sub" className=''><h6> Creative Multimedia</h6></a>
                                    <p>IT Park Fifad Developers</p>
                                </span>
                            </Card.Body>
                            <div className="card-footer ">
                                <p className='text-black'>Creative Design & Multimedia Institute had organized a Beyond The Bondaries to Fifad Developers (Canal to Airport Road, Opp La</p>
                                <Button variant="primary" className='klm'>
                                    <a href="/Sub">Know more..!</a>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card">
                            <Card.Img variant="top" src="https://www.cdmi.in/events/thumbnail/BRAND-ICON_(1).jpg" />
                            <Card.Body>
                                <Card.Title className='text-start'><a href="/Sub">Beyond The Boundaries 2023</a></Card.Title>
                                <span className='pral'>
                                    <a href="/Sub" className=''><h6> Creative Multimedia</h6></a>
                                    <p>IT Park Fifad Developers</p>
                                </span>
                            </Card.Body>
                            <div className="card-footer ">
                                <p className='text-black'>Creative Design & Multimedia Institute had organized a Beyond The Bondaries to Fifad Developers (Canal to Airport Road, Opp La</p>
                                <Button variant="primary" className='klm'>
                                    <a href="/Sub">Know more..!</a>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Comsec />
            <Courses />
            <Footer />
        </div>
    )
}

export default Eavent