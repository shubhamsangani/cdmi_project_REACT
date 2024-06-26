import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import Hppystd from './Hppystd';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
const Secoundpg = () => {
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
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/navratri_banner.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Creative Garba Night 2022</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/green-army-v14.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Green Army</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/NILS1142.JPG" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Students Award Ceremony</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/20220916_154506_(1).jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">LogicGo Infotech LLP Company Vi...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/banner.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Ganesh Chaturthi 2K22</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/malhar1.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">Welcome Team Of Sonu Tane Ma...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                                <Card className='codc bef'>
                                    <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/slb.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <a href="">SLB It Solution Company Visit 2K...</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <Card className='codc bef'>
                                <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/IMG20220827093751.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Life Skills Session By Haresh Shi...</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <Card className='codc bef'>
                                <Card.Img className='mhi' variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/75th-independence-day.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">75th Independence Day Celebrati...</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12'>
                            <div className="mid-diveder">
                                <ul className='pagination justify-content-center my-3 pack'>
                                    <li className='page-item'><a href="/Gallary" className='page-link'><HiOutlineChevronLeft /></a></li>
                                    <li className='page-item'><a href="/Gallary" className='page-link'>1</a></li>
                                    <li className='page-item active'><a href="/secound" className='page-link'>2</a></li>
                                    <li className='page-item'><a href="/thierd" className='page-link'>3</a></li>
                                    <li className='page-item'><a href="/Fourth" className='page-link'>4</a></li>
                                    <li className='page-item'><a href="/thierd" className='page-link'><HiOutlineChevronRight /></a></li>
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

export default Secoundpg