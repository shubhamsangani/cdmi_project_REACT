import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Heder.css"
import { TfiEmail } from "react-icons/tfi";
import { FaCertificate } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
function Heder() {
    return (
        <div>
            <div className='bg'>
                <Container>
                    <w-1140>
                        <Row className='align-items-justify'>
                            <Col className="col-lg-4 col-md-3 col-sm-6 d-none d-md-block">
                                <ul className='d-flex text-center'>
                                    <li><a href='' className='hell'> <TfiEmail />&nbsp;info@cdmi.in </a></li>
                                    <li><a href='' className='hell'> <FaCertificate />&nbsp;Verify Certificate</a></li>
                                </ul>
                            </Col>
                            <Col className="col-lg-4 col-md-5 col-sm-6 col-12 text-center">
                                <ul>
                                    <li><a href='' className='hell'>HAVE ANY QUESTION ? +91 90333 16003</a></li>
                                </ul>
                            </Col>
                            <Col className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <ul className='d-flex justify-content-end'>
                                    <li><a href='' className='hell'><FaFacebookF /></a></li>
                                    <li><a href='' className='hell'><FaTwitter /></a></li>
                                    <li><a href='' className='hell'><TfiGoogle /></a></li>
                                    <li><a href='' className='hell'><FaLinkedin /></a></li>
                                    <li><a href='' className='hell'><SiInstagram /></a></li>
                                    <li><a href='' className='hell'><IoLogoYoutube /></a></li>
                                    <li><a href='' className='hell'><BsWhatsapp /></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </w-1140>
                </Container>
            </div>
        </div>
    )
}

export default Heder; 