// React
import { Container, Row, Col} from 'react-bootstrap';


export default function Header() {

    return (
        <Container className="text-center bg-light">
            <h2 className="mb-5">Qué dicen nuestros usuarios...</h2>
            <Row>
                <Col lg={4}>
                    <div className="mx-auto mb-5 mb-lg-0" style={{ maxWidth: '18rem' }}>
                        <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." style={{ maxWidth: '12rem' }}/>
                        <h5>Nombre Aleatorio</h5>
                        <p>"Texto de ejemplo 1"</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="mx-auto mb-5 mb-lg-0" style={{ maxWidth: '18rem' }}>
                        <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." style={{ maxWidth: '12rem' }}/>
                        <h5>Nombre Aleatorio</h5>
                        <p className="texto">"Texto de ejemplo 2"</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="mx-auto mb-5 mb-lg-0" style={{ maxWidth: '18rem' }}>
                        <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." style={{ maxWidth: '12rem' }}/>
                        <h5>Nombre Aleatorio</h5>
                        <p>"Texto de ejemplo 3"</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}