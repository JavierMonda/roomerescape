// React
import { Carousel, Container, Row } from 'react-bootstrap';


export default function Header() {

    return (
        <Container>
            <Row className="justify-content-center mt-3 mb-3">
                <Carousel className="my-auto">
                    <Carousel.Item>
                        <img className="w-100 h-50" src="/assets/img/img1.jpg" alt="First slide" /> {/* style={{ width: '100%' }} */}
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="w-100 h-50" src="/assets/img/img3.jpg" alt="Second slide" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="w-100 h-50" src="/assets/img/img2.jpg" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    )
}