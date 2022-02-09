import {Container, Row, Col, Card} from 'react-bootstrap';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion';
function Success(){

    const cardVariant = {
        hidden : {
            y: -1250,
            opacity: 0
        },
        visible : {
            y: 0,
            transition : {
                //mass: 0.4, damping :8
                delay : 0.5, type : 'spring', stiffness: 125, //when: "beforeChildren",
                //staggerChildren: 5, stagger and when doesn't work for some reason idek
            },
            opacity: 1
        },
        exit: {
            y: -1250,
            opacity: 0
        }
    }
    let loading = false;
    const router = useRouter();
    if (typeof router.query.name != "undefined"){
        loading = true;
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
            <title>Success!</title>
            </Head>
            <Container>
                <Row className = "justify-content-center">
                    <Col xs={12} md={5} className = "my-5">
                        <motion.div variants={cardVariant} initial = "hidden" animate= "visible" exit = "exit">
                            <Card className = "grad border-0">
                                <Card.Title><h1>Success!</h1></Card.Title>
                                <Card.Text>Thank you for buying a Fortnite card {loading ? router.query.name : "John Doe"}!</Card.Text>
                                <Card.Text>A confirmation email will be sent to {loading ? router.query.email : "John@gmail.com"} :)</Card.Text>
                                <Card.Text>Your Fortnite card should arrive at {loading ? router.query.address: "123 Baker Street"} in a week. (totally not a scam) :D</Card.Text>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </nav>
    )
}

export default Success;