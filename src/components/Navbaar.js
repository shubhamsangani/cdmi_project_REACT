import React from 'react'
import './Navbaar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Navbaar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='sticky-top pos'>
            <Navbar expand="lg" className="bgc" >
                <Container>
                    <Navbar.Brand href=""><img src="https://www.cdmi.in/assets/front/images/creative-logo-blue.svg"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="">
                        <Nav className="me-auto nv">
                            <Nav.Link href="/" className='hm'>HOME</Nav.Link>
                            <NavDropdown title="COURSES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="">Action</NavDropdown.Item>
                                <NavDropdown.Item href="">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="">COLLAGE COURSES</Nav.Link>
                            <NavDropdown title="ACTIVITIES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Gallary">GALLERY</NavDropdown.Item>
                                <NavDropdown.Item href="/Event">EVENTS</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/Blag">BLOG</Nav.Link>
                            <NavDropdown title="KNOW US" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Aboutus">ABOUT US</NavDropdown.Item>
                                <NavDropdown.Item href="">SUCCESS STORY</NavDropdown.Item>
                                <NavDropdown.Item href="/Place">
                                    PLACEMENT PARTNERS
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="">GET IN TOUCH</Nav.Link>
                            <NavDropdown title="STUDENT ZONE" id="basic-nav-dropdown">
                                <NavDropdown.Item href="" onClick={handleShow}>STUDENT LOGIN</NavDropdown.Item>
                                <Modal show={show} onHide={handleClose}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <Modal.Body className='p-0'>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><Modal.Header closeButton className='zise'></Modal.Header></span>
                                        </button>
                                        <Row className='no-gutters'>
                                            <Col className='col-lg-6 p-0 d-none d-lg-block'>
                                                <div className="grou">
                                                    <div className="headng">
                                                        <div className="tazx">
                                                            <h1>BUILDING</h1>
                                                        </div>
                                                        <h4>AN INNOVATIVE LEARNING ORGANIZATION</h4>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className='col-lg-6 p-0'>
                                                <div className="padding_eight_all">
                                                    <div className="tab-content">
                                                        <div className="heading mb-3">
                                                            <h3>LOGIN</h3>
                                                        </div>
                                                        <form>
                                                            <div class="form-group">
                                                                <input type="text" placeholder='Enter Email' className='form-control' />
                                                            </div>
                                                            <div class="form-group">
                                                                <div class="input-group">
                                                                    <input type="password" placeholder="Password" className='form-control' />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <button type="submit" class="btn btn-default btn-block" name="login">Log in</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                </Modal>
                                <NavDropdown.Item href="">
                                    SHOWCASE
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navbaar;