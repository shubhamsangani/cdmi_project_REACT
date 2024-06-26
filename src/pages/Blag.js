import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Blog.css"
import Comsec from '../components/Comsec';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
const Blag = () => {
    return (
        <div>
            <div className="bock mb-5">
                <Container>
                    <Row>
                        <Col className="col-sm-6">
                            <div className="pagtit">
                                <h1>Blog</h1>
                            </div>
                        </Col>
                        <Col className="col-sm-6">
                            <div className="ollv">
                                <ul className="d-flex justify-content-end">
                                    <li><a href="/">Home</a></li>
                                    <li>/ Blog</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card cred">
                            <Card.Img variant="top" className="mhi" src="https://www.cdmi.in/blogs/thumbnail/Civil_engineering_training_institute_in_rander.jpg" />
                            <Card.Body>
                                <Card.Title><a href="/Sub"><h6>Future Trends in Game Development</h6></a></Card.Title>
                                <p className='text-start'>What is Game Development? IT industry is the fastest growing industry in the globe. In 2020 worldwide 7.26 Million users use th</p>
                                <a href="/Sub" className=' text-start'><h5>Read more...</h5></a>
                            </Card.Body>
                            <div className="card-footer d-flex">
                                <a href="/Sub">18th Apr, 2020</a>
                                <a href="/Sub">0 Comment</a>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card cred">
                            <Card.Img variant="top" className="mhi" src="https://www.cdmi.in/blogs/thumbnail/game_design_class_in_surat.jpg" />
                            <Card.Body>
                                <Card.Title><a href="/Sub"><h6>Future Trends in Game Development</h6></a></Card.Title>
                                <p className='text-start'>What is Game Development? IT industry is the fastest growing industry in the globe. In 2020 worldwide 7.26 Million users use th</p>
                                <a href="/Sub" className=' text-start'><h5>Read more...</h5></a>
                            </Card.Body>
                            <div className="card-footer d-flex">
                                <a href="/Sub">18th Apr, 2020</a>
                                <a href="/Sub">0 Comment</a>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card cred">
                            <Card.Img variant="top" className="mhi" src="https://www.cdmi.in/blogs/thumbnail/graphics_design.jpg" />
                            <Card.Body>
                                <Card.Title><a href="/Sub"><h6>Future Trends in Game Development</h6></a></Card.Title>
                                <p className='text-start'>What is Game Development? IT industry is the fastest growing industry in the globe. In 2020 worldwide 7.26 Million users use th</p>
                                <a href="/Sub" className=' text-start'><h5>Read more...</h5></a>
                            </Card.Body>
                            <div className="card-footer d-flex">
                                <a href="/Sub">18th Apr, 2020</a>
                                <a href="/Sub">0 Comment</a>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card cred">
                            <Card.Img variant="top" className="mhi" src="https://www.cdmi.in/blogs/thumbnail/android_app_development_course_in_surat1.png" />
                            <Card.Body>
                                <Card.Title><a href="/Sub"><h6>Future Trends in Game Development</h6></a></Card.Title>
                                <p className='text-start'>What is Game Development? IT industry is the fastest growing industry in the globe. In 2020 worldwide 7.26 Million users use th</p>
                                <a href="/Sub" className=' text-start'><h5>Read more...</h5></a>
                            </Card.Body>
                            <div className="card-footer d-flex">
                                <a href="/Sub">18th Apr, 2020</a>
                                <a href="/Sub">0 Comment</a>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card cred">
                            <Card.Img variant="top" className="mhi" src="https://www.cdmi.in/blogs/thumbnail/temptee.jpg" />
                            <Card.Body>
                                <Card.Title><a href="/Sub"><h6>Future Trends in Game Development</h6></a></Card.Title>
                                <p className='text-start'>What is Game Development? IT industry is the fastest growing industry in the globe. In 2020 worldwide 7.26 Million users use th</p>
                                <a href="/Sub" className=' text-start'><h5>Read more...</h5></a>
                            </Card.Body>
                            <div className="card-footer d-flex">
                                <a href="/Sub">18th Apr, 2020</a>
                                <a href="/Sub">0 Comment</a>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-lg-4 col-sm-6">
                        <Card className="Card cred">
                            <Card.Img variant="top" className="mhi" src="https://www.cdmi.in/blogs/thumbnail/Flutter-vs-RN-02.png" />
                            <Card.Body>
                                <Card.Title><a href="/Sub"><h6>Future Trends in Game Development</h6></a></Card.Title>
                                <p className='text-start'>What is Game Development? IT industry is the fastest growing industry in the globe. In 2020 worldwide 7.26 Million users use th</p>
                                <a href="/Sub" className=' text-start'><h5>Read more...</h5></a>
                            </Card.Body>
                            <div className="card-footer d-flex">
                                <a href="/Sub">18th Apr, 2020</a>
                                <a href="/Sub">0 Comment</a>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Comsec/>
            <Courses/>
            <Footer/>
        </div>
    )
}

export default Blag