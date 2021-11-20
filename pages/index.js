import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import Head from 'next/head';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CardInfo from './components/card.js';
function Home(){
    
    const stripePromise = loadStripe("pk_test_51JPZGuJfyBMg9VM8VrDgdBaJSx9VlrKA5Xs0pnuOKDRKLIgPqx0yBLBe8dojGZnpEeelmPQdENpLPSuVFcD2qWFU00t8IPGWzO");
    return(

        <nav className="home">
            <Head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossorigin="anonymous"
            />
            </Head>
            <Container>
                <Row className = "justify-content-center">
                    <Col xs={12} md={5} className = "my-5">
                        <Elements stripe={stripePromise}>
                            <CardInfo />
                        </Elements>
                    </Col>
                </Row>
            </Container>
        </nav>

    );
}

export default Home;
