import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import Hppystd from './Hppystd';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
const Sixthpg = () => {
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
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/sports-day-2.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Sports Mania 2K19</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/f1.JPG" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">FunFair 2K20</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_1487.JPG" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Katargam Opening Ceremony</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/20200106_140918.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Adani Industrial visit</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG_0566.JPG" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Suit & Saree Day Celebration</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/2.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Yogichowk Opening Ceremony</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
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
                                    <li className='page-item'><a href="/Fifth" className='page-link'>5</a></li>
                                    <li className='page-item active'><a href="/Sixth" className='page-link'>6</a></li>
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

export default Sixthpg