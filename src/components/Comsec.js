import { Container,Row,Col } from 'react-bootstrap';
import './Comsec.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Comsec = () => {
    return (
        <div>
            <Container className="backcol">
                <Row className="justify-content-center">
                    <Col className="col-xl-6 col-lg-8">
                        <div className="ct">
                            <span className=" sp cb">STUDENT PLACEMENT</span>
                            <h2 className="mor">OUR RECRUITMENT PARTNERS</h2>
                        </div>
                        <div className="small_divider"></div>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-md-12 flpad'>
                        <div className="owl-stage-outer">
                            <div className="owl-item active">
                                <div className="item">
                                    <img src="https://www.cdmi.in/companies/vasundhara-infotech1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="owl-stage-outer">
                            <div className="owl-item active">
                                <div className="item">
                                    <img src="https://www.cdmi.in/companies/Dotmagic-Infotech.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="owl-stage-outer">
                            <div className="owl-item active">
                                <div className="item">
                                    <img src="https://www.cdmi.in/companies/vora.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="owl-stage-outer">
                            <div className="owl-item active">
                                <div className="item">
                                    <img src="https://www.cdmi.in/companies/Prestious-It-Solution.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="owl-stage-outer">
                            <div className="owl-item active">
                                <div className="item">
                                    <img src="https://www.cdmi.in/companies/Appgenix-Infotech1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="owl-stage-outer">
                            <div className="owl-item active">
                                <div className="item">
                                    <img src="https://www.cdmi.in/companies/riseup.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Comsec;
