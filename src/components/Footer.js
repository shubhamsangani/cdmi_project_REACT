import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa"
import { FaUniversity } from "react-icons/fa";
export const Footer = () => {
    return (
        <div>
            <div className="bak">
                <Container>
                    <Row>
                        <Col className="col-lg-4 col-md-5 col-12 mb-4 mb-lg-0">
                            <div className="logo">
                                <a href=""><img src="https://www.cdmi.in/assets/front/images/creative-logo-white.svg" alt="" /></a>
                            </div>
                            <p className="text-justify cal">
                                Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.
                            </p>
                            <h6 className="tit hm">Follow Us On</h6>
                            <div className="yo">
                                <a href="" className="bac"><FaFacebookF /></a>
                                <a href="" className="bac"><FaTwitter /></a>
                                <a href="" className="bac"><FaGooglePlusG /></a>
                                <a href="" className="bac"><FaLinkedin /></a>
                                <a href="" className="bac"><FaInstagram /></a>
                                <a href="" className="bac"><FaYoutubeSquare /></a>
                                <a href="" className="bac"><FaWhatsapp /></a>
                            </div>
                        </Col>
                        <Col className="col-lg-3 col-12 mb-4 mb-lg-0">
                            <h6 className="tit text-white">FEATURE LINKS</h6>
                            <ul className="maj">
                                <li><a href="/Aboutus"><FaHandPointRight className="par" />About Us</a></li>
                                <li><a href="/Blag"><FaHandPointRight className="par" />Blogs</a></li>
                                <li><a href="/Gallary"><FaHandPointRight className="par" />Join Us</a></li>
                                <li><a href="/Event"><FaHandPointRight className="par" />Company Login</a></li>
                                <li><a href="/Place"><FaHandPointRight className="par" />Certificate Verification</a></li>
                            </ul>
                        </Col>
                        <Col className="col-lg-5 col-md-12 col-12">
                            <h6 className="tit text-white">CONTACT US</h6>
                            <div className="aub">
                                <h6 className="tit"><a href="" className="hm">HEAD OFFICE - YOGICHOWK</a></h6>
                                <span>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</span>
                                <p>
                                    Mo:
                                    <a href="">
                                        <span className="hm">+91 90333 16003</span>

                                    </a>
                                </p>
                                <div className="">
                                    <h6 className="tit"><a href="" className="hm">OTHER BRANCHES</a></h6>
                                    <ul className="maj">
                                        <li><a href=""><FaUniversity className="par" />Katargam</a></li>
                                        <li><a href=""><FaUniversity className="par" />Mota Varachha</a></li>
                                        <li><a href=""><FaUniversity className="par" /> Adajan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bfooter bgdark">
                <Container>
                    <Row className="align-items-center">
                        <Col className="col-md-12">
                            <p className="text-white m-md-0 txz">© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Footer;
