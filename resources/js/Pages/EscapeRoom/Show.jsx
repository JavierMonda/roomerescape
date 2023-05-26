// React
import { Head } from '@inertiajs/react'
import { Container, Row, Button } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar";
import Footer from '@/Layouts/Footer';
import Comments from '@/Components/Comments';


export default function Show() {

    return (
        <>
            <Head title="EscapeRoom -> 1" />
          
            <NavigationBar />
    
            <Container className="pt-3 pb-3">
                <header className="masthead">
                    <div className="container position-relative">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="text-center text-white">
                                    <h1 className="mb-5">¿A dónde quieres ir?</h1>
                                    <a href="/escape-room/1/play" class="btn btn-lg btn-primary">Comenzar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Row>
                    <Comments />        
                </Row>
            </Container>

            <Footer />
        </>
    )
}