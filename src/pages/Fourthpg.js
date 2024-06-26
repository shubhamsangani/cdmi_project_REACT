import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import Hppystd from './Hppystd';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
const Fourthpg = () => {
    return (
        <div>
            <div className="bock">
                <Container>
                    <Row>
                        <Col className="col-sm-6">
                            <div className="pagtit">
                                <h1>Gallary</h1>
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
            <div className="pt-5 pb-5">
                <Container>
                    <Row>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/independance.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">74th Independence Day Celebrati...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/ganesh-chaturthi1.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Ganesh Chaturthi 2K21</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_822710.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Syphnosys Technology Company...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_4253.JPG" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Enjoy City - One Day Picnic</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_20181225_101259.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Motivational Seminar by Mitesh D...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG-20180126-WA0039.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">69th Republic day Celebration</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG20191024123426.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Rangoli competition 2K19</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <Card className='codc bef'>
                                <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/20191220_150501.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Diversity Infotech Visit</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <Card className='codc bef'>
                                <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_0867.JPG" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Camp fire 2018</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12'>
                            <div className="mid-diveder">
                                <ul className='pagination justify-content-center my-3 pack'>
                                    <li className='page-item'><a href="/Gallary" className='page-link'><HiOutlineChevronDoubleLeft /></a></li>
                                    <li className='page-item'><a href="/thierd" className='page-link'><HiOutlineChevronLeft /></a></li>
                                    <li className='page-item'><a href="/secound" className='page-link'>2</a></li>
                                    <li className='page-item'><a href="/thierd" className='page-link'>3</a></li>
                                    <li className='page-item active'><a href="/Fourth" className='page-link'>4</a></li>
                                    <li className='page-item'><a href="/Fifth" className='page-link'>5</a></li>
                                    <li className='page-item'><a href="/Sixth" className='page-link'>6</a></li>
                                    <li className='page-item'><a href="/Fifth" className='page-link'><HiOutlineChevronRight /></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Hppystd />
            <Courses />
            <Footer />
        </div>
    )
}

export default Fourthpg