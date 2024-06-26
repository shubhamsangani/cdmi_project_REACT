import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import Hppystd from './Hppystd';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
const Fifthpg = () => {
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
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/a_(49).JPG" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Navratri Celebration 2K18</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_1943.JPG" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Janmashtami Celebration 2019</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_6325.JPG" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Navratri Celebration 2K19</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_20191128_192338.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Expert Lecture by Hunani Infote...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_20191129_131859.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">C Language Expert Lecture</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_20191126_100723.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">English Vinglish Seminar by Chet...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_20191130_111747.jpg" />
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
                                <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG-20181229-WA0026.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Design Competition 2K18</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <Card className='codc bef'>
                                <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_20180916_145233.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Orphanage Visit - Karutha</a>
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
                                    <li className='page-item'><a href="/Fourth" className='page-link'><HiOutlineChevronLeft /></a></li>
                                    <li className='page-item'><a href="/thierd" className='page-link'>3</a></li>
                                    <li className='page-item'><a href="/Fourth" className='page-link'>4</a></li>
                                    <li className='page-item active'><a href="/Fifth" className='page-link'>5</a></li>
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

export default Fifthpg