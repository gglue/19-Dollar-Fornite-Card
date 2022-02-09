import {Container, Row, Col, Image} from 'react-bootstrap';
import Head from 'next/head';
import {Elements} from "@stripe/react-stripe-js";
import {motion} from 'framer-motion';
import CardInfo from './components/card.js';
function Home(){

    const titleVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition : {
                delay : 0.5, type : 'spring', stiffness: 125, 
            }
        },
        exit: {
            opacity: 0
        }
    };

    const imageVariant = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 1,
            transition : {
                delay : 1.0, type : 'spring', stiffness: 250,
            }
        },
        exit:{
            scale: 0
        }
    }
    return(
        <nav className="home">
            <Head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <title>19 dollar Fortnite Card :)</title>
            </Head>
            <Container>
                <Row className = "justify-content-center">
                    <Col xs={12} md={5} className = "my-5 text-center">
                        <motion.h1 variants={titleVariant} initial = "hidden" animate= "visible" exit = "exit"><b>19 Dollar Fortnite Card, <br></br>Who Wants it?</b></motion.h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={5} className = "mx-auto text-center">
                        <motion.img variants ={imageVariant} initial = "hidden" animate="visible" exit = "exit" src ="/fortnite.png" width="300" height="400"></motion.img>
                    </Col>
                </Row>
                <Row className = "justify-content-center">
                    <Col xs={12} md={5} className = "my-5">
                        <CardInfo />
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Home;
