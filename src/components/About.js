import { Col, Container, Row } from "react-bootstrap";
import "./About.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export const About = () => {
    return (
        <div>
            <Container fluid className="mar">
                <Row className="no-gutters align-items-center">
                    <Col className="col-lg-7 col-md-12 abouttext">
                        <div className="pad">
                            <div className="ms">
                                <span className="subheading">About Us</span>
                                <h5>IT Career in Surat, moving towards the better Tomorrow!</h5>
                            </div>
                            <p className="text-justify pr-4">

                                Creative Design &amp; Multimedia Institute(CDMI)  is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing &amp; All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields.
                                Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                            </p>
                            <Row>
                                <Col className="col-12">
                                    <div className="overlay_bg_30 ms">
                                        <a href="" className="btn  bt">Enroll Now ...!</a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="col-lg-5 col-md-12 im">
                        <img className="w-100" src="https://www.cdmi.in/assets/front/images/about-us.jpg"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About;
