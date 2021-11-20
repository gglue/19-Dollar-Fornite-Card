import Stripe from "stripe";
const stripe = new Stripe("");

async function Charge(req, res){
    const {id, amount} = req.body;

    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "CAD",
            description: "19 dollar fortnite card",
            payment_method: id,
            confirm: true
        });

        console.log(payment);
        return res.status(200).json({
            confirm: "goodjob"
        });
    }
    catch (error){
        console.log(error.message);
        return res.status(400).json({
            message: error.message
        })
    }

}

export default Charge;