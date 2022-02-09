import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import Router from "next/router";
import {motion} from 'framer-motion';

function CardInfo(){

    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setProcessingTo] = useState(false);

    const cardVariant = {
        hidden : {
            y: 1250,
        },
        visible : {
            y: 0,
            transition: {
                //mass: 0.4, damping :8
                delay : 1.5, type : 'spring', stiffness: 50, //when: "beforeChildren",
                //staggerChildren: 5, stagger and when doesn't work for some reason idek
            }
        },
        exit : {
            y: 1250
        }
    }

    async function handleSubmit(event){
        setProcessingTo(true);
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
            Router.push({
                pathname: '/success',
                query: {name : detail.name,
                email : detail.email,
                address: detail.address.line1}
            });
        }
        else{
            setProcessingTo(false);
        }
    
    }
    return(
        <Form onSubmit={handleSubmit}>
        <motion.div variants={cardVariant} initial = "hidden" animate= "visible" exit = "exit">
            <Card className = "grad border-0">
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
                        <Button type="submit" size="lg" disabled={isProcessing}>Don't Get Blocked!</Button>
                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    </Form>
        
    );
}

export default CardInfo;