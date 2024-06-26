import { Container, Row ,Col } from 'react-bootstrap';
import './Combar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Combar = () => {
  return (
    <div>
        <div className='backime spes'>
            <Container>
                <Row>
                    <Col className='col-lg-3 pb-md-3 col-6'>
                      <div className='ber'>
                        <div className='ime d-flex justify-content-mid'></div>
                        <div className='txt'>
                          <h3 className='counter_text text-white'>
                            <span className='counter'>14000</span>+
                          </h3>
                          <p className='text-uppercase font-weight-bold text-white'>HAPPY STUDENTS</p>
                        </div>
                      </div>
                    </Col>
                    <Col className='col-lg-3 pb-md-3 col-6'>
                      <div className='ber'>
                        <div className='ime d-flex justify-content-mid'></div>
                        <div className='txt'>
                          <h3 className='counter_text text-white'>
                            <span className='counter'>14000</span>+
                          </h3>
                          <p className='text-uppercase font-weight-bold text-white'>HAPPY STUDENTS</p>
                        </div>
                      </div>
                    </Col>
                    <Col className='col-lg-3 pb-md-3 col-6'>
                      <div className='ber'>
                        <div className='ime d-flex justify-content-mid'></div>
                        <div className='txt'>
                          <h3 className='counter_text text-white'>
                            <span className='counter'>14000</span>+
                          </h3>
                          <p className='text-uppercase font-weight-bold text-white'>HAPPY STUDENTS</p>
                        </div>
                      </div>
                    </Col>
                    <Col className='col-lg-3 pb-md-3 col-6'>
                      <div className='ber'>
                        <div className='ime d-flex justify-content-mid'></div>
                        <div className='txt'>
                          <h3 className='counter_text text-white'>
                            <span className='counter'>14000</span>+
                          </h3>
                          <p className='text-uppercase font-weight-bold text-white'>HAPPY STUDENTS</p>
                        </div>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}
export default Combar;
