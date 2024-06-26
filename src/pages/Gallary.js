import "./Gallary.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Hppystd from './Hppystd';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
const Gallary = () => {
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
                                <Card.Img className="mhi" variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/thumbnail.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Beyond The Boundaries 2023</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                            <Card className='codc bef'>
                                <Card.Img className="mhi" variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/celebration.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Creative Celebration Days 2022...</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                            <Card className='codc bef'>
                                <Card.Img className="mhi" variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/scrptus.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Scriptus Solutions Company Visit...</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                            <Card className='codc bef'>
                                <Card.Img className="mhi" variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/vpn.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">VPN Company Visit - 2023</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                            <Card className='codc bef'>
                                <Card.Img className="mhi" variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/artonest.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Artonest Company Visit - 2023</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                            <Card className='codc bef'>
                                <Card.Img className="mhi" variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/narola.jpg"/>
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Narola Infotech Company Visit...</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <a href="">
                            <Card className='codc bef'>
                                <Card.Img className="mhi" variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/Untitled-11.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">Sport Mania 2k22-23</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <Card className='codc bef'>
                                <Card.Img className="mhi" variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/Untitled-6.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">AR - VR Expert Lecture By Goral...</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6'>
                            <Card className='codc bef'>
                                <Card.Img className="mhi" variant="top" src="https://www.cdmi.in/gallery_category/thumbnail/Untitled-1.jpg" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="">StackApp Company Visit 2022</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12'>
                            <div className="mid-diveder">
                                <ul className='pagination justify-content-center my-3 pack'>
                                    <li className='page-item active'><a href="/Gallary" className='page-link'>1</a></li>
                                    <li className='page-item'><a href="/secound" className='page-link'>2</a></li>
                                    <li className='page-item'><a href="/thierd" className='page-link'>3</a></li>
                                    <li className='page-item'><a href="/secound" className='page-link'><HiOutlineChevronRight/></a></li>
                                    <li className='page-item'><a href="/Sixth" className='page-link'><HiOutlineChevronDoubleRight/></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Hppystd/>
            <Courses/>
            <Footer/>
        </div>
    )
}

export default Gallary