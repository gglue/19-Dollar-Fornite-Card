import {loadStripe} from "@stripe/stripe-js";
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import {Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";


function CardInfo(){

    const stripe = useStripe();
    const elements = useElements();
    


    async function handleSubmit(event){
        event.preventDefault();
        const detail = {
            name: event.target.firstName.value + ' ' + event.target.lastName.value,
            email: event.target.email.value,
            address: {
                city: event.target.city.value,
                state: event.target.province.value,
                postal_code: event.target.postalCode.value,
                line1: event.target.address.value
            }
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: detail
        });

        if(!error){
            const {id} = paymentMethod;
            try{
                const {data} = await axios.post("/api/charge", {id, amount : 1999});
            }
            catch (error){
                console.log(error);
            }
            
        }
    
    }
    return(
        <Form onSubmit={handleSubmit}>
        <Card>
            <Card.Body>
                <Card.Title className = "text-center mb-3"><h2>Yes, I'm Giving It Away! (For $20)</h2></Card.Title>
                <Card.Text className = "text-center"><b>Remember, Share! Share! Share!</b></Card.Text>
                <Form.Group as = {Row} className="mb-3">
                    <Col>
                        <Form.Control type="text" name="firstName" placeholder="First Name" />
                    </Col>
                    <Col>
                        <Form.Control type="text" name="lastName" placeholder="Last Name" />
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-3">
                    <Col md={12}>
                        <Form.Control type="email" name="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-3">
                    <Col md={12}>
                        <Form.Control type="text" name="address" placeholder="Address" />
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-3">
                    <Col>
                        <Form.Control type="text" name="city" placeholder="City" />
                    </Col>
                    <Col>
                        <Form.Control type="text" name="province" placeholder="Province/State" />
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-3">
                    <Col md={12}>
                        <Form.Control type="text" name="postalCode" placeholder="Postal Code" />
                    </Col>
                </Form.Group>
                <Form.Group as = {Row} className="mb-3">
                    <Col md={12}>
                        <CardElement options={{hidePostalCode: true}} />
                    </Col>
                </Form.Group>
                <div className = "text-center">
                    <Button type="submit" size="lg">Don't Get Blocked!</Button>
                </div>
            </Card.Body>
        </Card>
    </Form>
        
    );
}

export default CardInfo;