import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import Head from 'next/head';
function Home(){
    
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
                        <Form>
                            <Card>
                                <Card.Body>
                                    <Card.Title className = "text-center mb-3"><h2>Yes, I'm Giving It Away! (For $20)</h2></Card.Title>
                                    <Card.Text className = "text-center"><b>Remember, Share! Share! Share!</b></Card.Text>
                                    <Form.Group as = {Row} className="mb-3">
                                        <Col>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as = {Row} className="mb-3">
                                        <Col md={12}>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as = {Row} className="mb-3">
                                        <Col md={12}>
                                            <Form.Control type="text" placeholder="Address" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as = {Row} className="mb-3">
                                        <Col>
                                            <Form.Control type="text" placeholder="City" />
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" placeholder="Province/State" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as = {Row} className="mb-3">
                                        <Col md={12}>
                                            <Form.Control type="text" placeholder="Postal Code" />
                                        </Col>
                                    </Form.Group>
                                    <div className = "text-center">
                                        <Button size="lg">Don't Get Blocked!</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </nav>

    );
}

export default Home;
