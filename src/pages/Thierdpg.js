import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import Hppystd from './Hppystd';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
const Thierdpg = () => {
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
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/cover.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Guru Purnima 2K22</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/invints1.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Invints Company Visit 2K22</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/sport.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Sport Mania 2K22</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/thumm.jpg" />
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
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/pd.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Personality Development Semin...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/awesome.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Awesome Infotech Company Vis...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/creativepremier.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Creative Premier League 2k21</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <Card className='codc bef'>
                                <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/company-farewell.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Company Farewell Function</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <Card className='codc bef'>
                                <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/invints.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Invints Company Visit</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12'>
                            <div className="mid-diveder">
                                <ul className='pagination justify-content-center my-3 pack'>
                                    <li className='page-item'><a href="/secound" className='page-link'><HiOutlineChevronLeft /></a></li>
                                    <li className='page-item'><a href="/Gallary" className='page-link'>1</a></li>
                                    <li className='page-item'><a href="/secound" className='page-link'>2</a></li>
                                    <li className='page-item active'><a href="/thierd" className='page-link'>3</a></li>
                                    <li className='page-item'><a href="/Fourth" className='page-link'>4</a></li>
                                    <li className='page-item'><a href="/Fifth" className='page-link'>5</a></li>
                                    <li className='page-item'><a href="/Fourth" className='page-link'><HiOutlineChevronRight /></a></li>
                                    <li className='page-item'><a href="/Sixth" className='page-link'><HiOutlineChevronDoubleRight /></a></li>
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

export default Thierdpg