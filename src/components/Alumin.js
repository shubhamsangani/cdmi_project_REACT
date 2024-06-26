import 'bootstrap/dist/css/bootstrap.min.css';
import "./Alumin.css"
import { FaQuoteRight } from "react-icons/fa";
import { Row, Col, Container } from 'react-bootstrap';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';

export const Alumin = () => {
    return (
        <div>
            <div className='main'>
                <Container>
                    <Row className="align-items-center">
                        <Col className='col-lg-6 pb-5'>
                            <div className="">
                                <div className="hed">
                                    <span className='subheading'>
                                        Happy student
                                    </span>
                                    <h2>ALUMNI SPEAK</h2>
                                </div>
                                <div className="cov d-flex">
                                    <FaQuoteRight className='voc' />
                                    <div className="owlnav d-flex">
                                        <div className="owlpre pos hov">
                                            <FaChevronLeft />
                                        </div>
                                        <div className="owlnex pos hov">
                                            <FaChevronRight />
                                        </div>
                                    </div>
                                </div>
                                <div className="cor">
                                    <Carousel>
                                        <Carousel.Item>
                                            <div className="text-justify">
                                                <p>
                                                    Very good Institute for the Computer courses. They are always ready to provide the help required. 
                                                    The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, 
                                                    you will be very well equipped to clear interview and land in good job.
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="imsec">
                                                    <img src="https://www.cdmi.in/student_review/Goti_Shruti-Android_Developer-1676359169.jpg" alt="" />
                                                </div>
                                                <div className="imtxt">
                                                    <h6 className='mb-1 ms-4 bl'>Goti Shruti</h6>
                                                    <span className='ms-4 yel'>Android Developer</span>
                                                    <span>@</span>
                                                    <span> KD Infotech</span>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="text-justify">
                                                <p>
                                                I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="imsec">
                                                    <img src="https://www.cdmi.in/student_review/KOLADIYA_MANSI-UI-UX_Designer-1656140567.jpg" alt="" />
                                                </div>
                                                <div className="imtxt">
                                                    <h6 className='mb-1 ms-4 bl'>KOLADIYA MANSI</h6>
                                                    <span className='ms-4 yel'>UI/UX Designer </span>
                                                    <span>@</span>
                                                    <span>  Patoliya Infotech</span>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="text-justify">
                                                <p>
                                                Good teaching. Well nature staff.. Good education they provide for every student in the institution... Staff's are very quite,decent ,multi talented and well matured to........ Thank you creative multimedia!!!!
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="imsec">
                                                    <img src="https://www.cdmi.in/student_review/Ishita_chopada-Flutter_Developer-1671447245.jpg" alt="" />
                                                </div>
                                                <div className="imtxt">
                                                    <h6 className='mb-1 ms-4 bl'>Ishita Chopada</h6>
                                                    <span className='ms-4 yel'>Flutter Developer</span>
                                                    <span>@</span>
                                                    <span> Samp Technology</span>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-lg-6'>
                            <div className="imehold">
                                <div className="tesshepe">
                                    <img src="https://www.cdmi.in/assets/front/images/testimonial_shape.png" alt="" />
                                </div>
                                <div className="bacim testim"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Alumin;
